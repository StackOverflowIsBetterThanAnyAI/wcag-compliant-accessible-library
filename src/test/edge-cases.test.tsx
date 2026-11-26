/**
 * Behaviour that the main test files do not cover: options, opt-outs and warnings
 * for the less common paths through each component.
 */
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import {
    EmbeddedObject,
    Graphic,
    Heading,
    HeadingLevel,
    Image,
    ImageLink,
    Link,
    Nav,
    NavLink,
    SkipLink,
} from '../index.js'

function spyOnWarnings() {
    return vi.spyOn(console, 'warn').mockImplementation(() => {})
}

describe('Heading', () => {
    it('renders an h6 and warns when nesting goes deeper than six levels', () => {
        const warn = spyOnWarnings()
        render(
            <HeadingLevel level={6}>
                <HeadingLevel>
                    <Heading>Too deep</Heading>
                </HeadingLevel>
            </HeadingLevel>
        )
        expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(
            'Too deep'
        )
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('Heading level 7 does not exist')
        )
    })
})

describe('Image', () => {
    it('warns about an empty alt and suggests decorative', () => {
        const warn = spyOnWarnings()
        render(<Image src="/a.png" alt="" />)
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('pass `decorative` instead')
        )
    })

    it('does not warn for a descriptive alt', () => {
        const warn = spyOnWarnings()
        render(<Image src="/a.png" alt="Ada Lovelace at her desk" />)
        expect(warn).not.toHaveBeenCalled()
    })
})

describe('SkipLink', () => {
    it('leaves visibility to your CSS with hideUntilFocused={false}', () => {
        render(
            <SkipLink
                targetId="content"
                hideUntilFocused={false}
                className="skip"
            />
        )
        const link = screen.getByRole('link', { name: 'Skip to main content' })
        expect(link).not.toHaveStyle({ position: 'absolute' })
        expect(link).toHaveClass('skip')
    })

    it('respects preventDefault in a custom onClick', async () => {
        const user = userEvent.setup()
        render(
            <>
                <SkipLink
                    targetId="content"
                    onClick={(event) => event.preventDefault()}
                />
                <main id="content">Content</main>
            </>
        )
        await user.click(screen.getByRole('link'))
        const main = screen.getByRole('main')
        expect(main).not.toHaveFocus()
        expect(main).not.toHaveAttribute('tabindex')
    })

    it('accepts custom link text, e.g. for other languages', () => {
        render(<SkipLink targetId="content">Zum Inhalt springen</SkipLink>)
        expect(
            screen.getByRole('link', { name: 'Zum Inhalt springen' })
        ).toHaveAttribute('href', '#content')
    })
})

describe('Link', () => {
    it('adds neither a hint nor rel to links that open in the same tab', () => {
        const { container } = render(<Link href="/about">About</Link>)
        const link = screen.getByRole('link', { name: 'About' })
        expect(link).not.toHaveAttribute('rel')
        expect(link).not.toHaveAttribute('target')
        expect(container.querySelectorAll('span')).toHaveLength(0)
    })

    it('omits the hint with newTabHint={null} but still adds noopener', () => {
        render(
            <Link href="https://example.com" target="_blank" newTabHint={null}>
                Example (new tab)
            </Link>
        )
        expect(
            screen.getByRole('link', { name: 'Example (new tab)' })
        ).toHaveAttribute('rel', 'noopener')
    })

    it('does not duplicate noopener', () => {
        render(
            <Link
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Example
            </Link>
        )
        expect(screen.getByRole('link')).toHaveAttribute(
            'rel',
            'noopener noreferrer'
        )
    })
})

describe('NavLink', () => {
    it('supports other aria-current values and no current state', () => {
        render(
            <Nav label="Checkout steps">
                <NavLink href="/cart">Cart</NavLink>
                <NavLink href="/address" current="step">
                    Address
                </NavLink>
                <NavLink href="/payment" current={false}>
                    Payment
                </NavLink>
            </Nav>
        )
        expect(screen.getByRole('link', { name: 'Address' })).toHaveAttribute(
            'aria-current',
            'step'
        )
        expect(
            screen.getByRole('link', { name: 'Payment' })
        ).not.toHaveAttribute('aria-current')
        expect(screen.getByRole('link', { name: 'Cart' })).not.toHaveAttribute(
            'aria-current'
        )
    })
})

describe('ImageLink', () => {
    it('places the image after the text with imagePosition="end"', () => {
        render(
            <ImageLink
                href="/"
                image={{ src: '/arrow.svg' }}
                imagePosition="end"
            >
                Next
            </ImageLink>
        )
        expect(
            screen.getByRole('link', { name: 'Next' }).lastElementChild?.tagName
        ).toBe('IMG')
    })

    it('warns when an image-only link has an empty alt', () => {
        const warn = spyOnWarnings()
        render(<ImageLink href="/" image={{ src: '/home.svg' }} alt=" " />)
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('describes the destination')
        )
    })
})

describe('Graphic', () => {
    it('is named by a visible heading and described by another element', () => {
        render(
            <>
                <h2 id="chart-title">Sales 2025</h2>
                <Graphic labelledBy="chart-title" describedBy="chart-summary">
                    <svg />
                </Graphic>
                <p id="chart-summary">Sales doubled in the second half.</p>
            </>
        )
        const graphic = screen.getByRole('img', { name: 'Sales 2025' })
        expect(graphic).toHaveAccessibleDescription(
            'Sales doubled in the second half.'
        )
    })

    it('warns about an empty label', () => {
        const warn = spyOnWarnings()
        render(<Graphic label=" ">x</Graphic>)
        expect(warn).toHaveBeenCalledWith(expect.stringContaining('non-empty'))
    })
})

describe('EmbeddedObject', () => {
    it('warns about an empty title and missing fallback content', () => {
        const warn = spyOnWarnings()
        render(
            <EmbeddedObject data="/a.pdf" title="">
                {null}
            </EmbeddedObject>
        )
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('Provide a `title`')
        )
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('Provide fallback content')
        )
    })
})
