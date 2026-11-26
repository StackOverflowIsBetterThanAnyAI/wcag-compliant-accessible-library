/**
 * Server rendering and hydration: every component must render to HTML on the server
 * (e.g. Next.js, Remix) and hydrate without mismatches, and the accessibility wiring
 * must already be in the server HTML, so it works before JavaScript has loaded.
 */
import { act } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

import {
    EmbeddedObject,
    Emoji,
    Field,
    FieldDescription,
    FieldError,
    FieldInput,
    FieldLabel,
    Fieldset,
    Figure,
    FigureCaption,
    FigureDescription,
    Graphic,
    Heading,
    HeadingLevel,
    Image,
    ImageLink,
    Landmark,
    Link,
    List,
    Nav,
    NavLink,
    SkipLink,
    Table,
    TableHeaderCell,
    VisuallyHidden,
} from '../index.js'

function Page() {
    return (
        <>
            <SkipLink targetId="main" />
            <Landmark as="header">
                <Nav label="Main">
                    <NavLink href="/" current>
                        Home
                    </NavLink>
                    <NavLink href="https://example.com" target="_blank">
                        External
                    </NavLink>
                </Nav>
            </Landmark>
            <Landmark as="main" id="main">
                <Heading>Title</Heading>
                <HeadingLevel>
                    <Heading>Section</Heading>
                    <Image src="/a.png" alt="Ada Lovelace" />
                    <Image src="/b.png" decorative />
                    <ImageLink
                        href="/"
                        image={{ src: '/home.svg' }}
                        alt="Home page"
                    />
                    <Graphic label="Four of five stars">★★★★☆</Graphic>
                    <Emoji label="Warning">⚠️</Emoji>
                    <Figure>
                        <Image src="/chart.png" alt="Sales chart" />
                        <FigureDescription>Sales doubled.</FigureDescription>
                        <FigureCaption>Sales 2025</FigureCaption>
                    </Figure>
                    <EmbeddedObject data="/r.pdf" title="Report (PDF)">
                        <Link href="/r.pdf">Download the report</Link>
                    </EmbeddedObject>
                    <Field invalid required>
                        <FieldLabel>Email</FieldLabel>
                        <FieldInput type="email" />
                        <FieldDescription>For the receipt.</FieldDescription>
                        <FieldError>Enter an email address.</FieldError>
                    </Field>
                    <Fieldset legend="Shipping" error="Choose a method.">
                        <label>
                            <input type="radio" name="s" /> Standard
                        </label>
                    </Fieldset>
                    <List>
                        <li>One</li>
                    </List>
                    <Table caption="Hours" scrollable>
                        <tbody>
                            <tr>
                                <TableHeaderCell scope="row">
                                    Mon
                                </TableHeaderCell>
                                <td>9–17</td>
                            </tr>
                        </tbody>
                    </Table>
                    <VisuallyHidden>Only for screen readers</VisuallyHidden>
                </HeadingLevel>
            </Landmark>
        </>
    )
}

function serverRender() {
    const container = document.createElement('div')
    container.innerHTML = renderToString(<Page />)
    document.body.appendChild(container)
    return container
}

// hydrateRoot is used directly instead of Testing Library, so tell React this is a test environment
;(
    globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true

afterEach(() => {
    document.body.innerHTML = ''
})

describe('server rendering', () => {
    it('renders every component to HTML', () => {
        const html = renderToString(<Page />)
        expect(html).toContain('<h1>Title</h1>')
        expect(html).toContain('<h2>Section</h2>')
        expect(html).toContain('aria-current="page"')
        expect(html).toContain('role="region"')
    })

    it('includes the accessibility wiring in the server HTML', () => {
        const container = serverRender()
        const input = container.querySelector('input[type="email"]')
        const label = container.querySelector('label')
        expect(label?.getAttribute('for')).toBe(input?.id)
        expect(input).toHaveAttribute('aria-invalid', 'true')
        expect(input).toBeRequired()

        const fieldset = container.querySelector('fieldset')
        expect(fieldset).toHaveAttribute('aria-describedby')
        expect(fieldset).toHaveAttribute('data-invalid')
    })

    it('links description and error in the server HTML, before JavaScript runs', () => {
        const container = serverRender()
        const input = container.querySelector('input[type="email"]')
        expect(input).toHaveAccessibleDescription(
            'For the receipt. Enter an email address.'
        )
        expect(container.querySelector('figure')).toHaveAccessibleDescription(
            'Sales doubled.'
        )
    })

    it('drops references to missing parts after hydration', async () => {
        function Bare() {
            return (
                <>
                    <Field>
                        <FieldLabel>Name</FieldLabel>
                        <FieldInput />
                    </Field>
                    <Figure>
                        <Image src="/a.png" alt="Ada Lovelace" />
                    </Figure>
                </>
            )
        }
        const container = document.createElement('div')
        container.innerHTML = renderToString(<Bare />)
        document.body.appendChild(container)
        const input = container.querySelector('input')
        const figure = container.querySelector('figure')
        // the server cannot know that the parts are missing yet
        expect(input).toHaveAttribute('aria-describedby')
        expect(figure).toHaveAttribute('aria-describedby')

        await act(async () => {
            hydrateRoot(container, <Bare />)
        })
        expect(input).not.toHaveAttribute('aria-describedby')
        expect(figure).not.toHaveAttribute('aria-describedby')
    })

    it('hydrates without errors or mismatches', async () => {
        const container = serverRender()
        const errors = vi.spyOn(console, 'error').mockImplementation(() => {})
        const recoverable = vi.fn()

        await act(async () => {
            hydrateRoot(container, <Page />, {
                onRecoverableError: recoverable,
            })
        })

        expect(recoverable).not.toHaveBeenCalled()
        expect(errors).not.toHaveBeenCalled()
    })

    it('links description and error after hydration', async () => {
        const container = serverRender()
        await act(async () => {
            hydrateRoot(container, <Page />)
        })
        const input = container.querySelector('input[type="email"]')
        expect(input).toHaveAccessibleDescription(
            'For the receipt. Enter an email address.'
        )
        expect(container.querySelector('figure')).toHaveAccessibleDescription(
            'Sales doubled.'
        )
    })
})
