import { render, screen, within } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import {
    Heading,
    HeadingLevel,
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
import { axeViolations } from './axe.js'

describe('Heading', () => {
    it('derives levels from nested HeadingLevel', () => {
        render(
            <>
                <Heading>Title</Heading>
                <HeadingLevel>
                    <Heading>Section</Heading>
                    <HeadingLevel>
                        <Heading>Subsection</Heading>
                        <Heading level={2}>Explicit</Heading>
                    </HeadingLevel>
                </HeadingLevel>
            </>
        )
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            'Title'
        )
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
            'Subsection'
        )
        expect(
            screen
                .getAllByRole('heading', { level: 2 })
                .map((h) => h.textContent)
        ).toEqual(['Section', 'Explicit'])
    })
})

describe('Landmark', () => {
    it.each([
        ['search', 'Site search'],
        ['search', 'Volltextsuche'],
        ['form', 'Contact form'],
        ['form', 'Kontaktformular'],
        ['section', 'News region'],
    ] as const)('<%s> warns about label=%j', (as, label) => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(
            <Landmark as={as} label={label}>
                x
            </Landmark>
        )
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('already announce the role')
        )
        warn.mockRestore()
    })

    it('accepts labels that only contain a role word inside another word', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(
            <>
                <Landmark as="search" label="Research archive">
                    x
                </Landmark>
                <Landmark as="form" label="Information request">
                    x
                </Landmark>
            </>
        )
        expect(warn).not.toHaveBeenCalled()
        warn.mockRestore()
    })

    it('warns about a second visible main', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(
            <>
                <Landmark as="main">One</Landmark>
                <main>Two</main>
                <main hidden>Hidden</main>
            </>
        )
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('2 visible <main> elements')
        )
        warn.mockRestore()
    })

    it('renders named landmarks', async () => {
        const { container } = render(
            <>
                <Landmark as="main">
                    <Landmark as="section" label="Latest news">
                        news
                    </Landmark>
                </Landmark>
                <Landmark as="search" label="Site">
                    search
                </Landmark>
            </>
        )
        expect(screen.getByRole('main')).toBeInTheDocument()
        expect(
            screen.getByRole('region', { name: 'Latest news' })
        ).toBeInTheDocument()
        expect(await axeViolations(container)).toEqual([])
    })
})

describe('List', () => {
    it('keeps list semantics', () => {
        render(
            <List ordered start={3}>
                <li>a</li>
                <li>b</li>
            </List>
        )
        const list = screen.getByRole('list')
        expect(list.tagName).toBe('OL')
        expect(list).toHaveAttribute('start', '3')
        expect(screen.getAllByRole('listitem')).toHaveLength(2)
    })
})

describe('Link', () => {
    it('announces new tabs and adds rel=noopener', async () => {
        const { container } = render(
            <Link href="https://example.com" target="_blank" rel="external">
                Example
            </Link>
        )
        const link = screen.getByRole('link', {
            name: 'Example (opens in a new tab)',
        })
        expect(link).toHaveAttribute('rel', 'external noopener')
        expect(await axeViolations(container)).toEqual([])
    })

    it('appends the new-tab hint to an aria-label', () => {
        render(
            <Link
                href="https://example.com/report.pdf"
                target="_blank"
                aria-label="Annual report 2025, PDF, 2 MB"
            >
                Annual report 2025
            </Link>
        )
        expect(
            screen.getByRole('link', {
                name: 'Annual report 2025, PDF, 2 MB (opens in a new tab)',
            })
        ).toBeInTheDocument()
    })

    it('warns when the hint cannot be added to an aria-label', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(
            <Link
                href="https://example.com"
                target="_blank"
                aria-label="Example"
                newTabHint={<em> (new tab)</em>}
            >
                Example
            </Link>
        )
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('non-string newTabHint')
        )
        warn.mockRestore()
    })

    it('renders through a custom element (e.g. a router link)', () => {
        render(
            <Link
                href="/about"
                render={({ children, ...props }) => (
                    <a {...props} data-router="yes">
                        {children}
                    </a>
                )}
            >
                About
            </Link>
        )
        expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
            'data-router',
            'yes'
        )
    })
})

describe('Nav', () => {
    it('renders a named navigation with a list and the current page', async () => {
        const { container } = render(
            <Nav label="Main">
                <NavLink href="/" current>
                    Home
                </NavLink>
                <NavLink href="/blog">Blog</NavLink>
            </Nav>
        )
        expect(
            screen.getByRole('navigation', { name: 'Main' })
        ).toBeInTheDocument()
        expect(screen.getAllByRole('listitem')).toHaveLength(2)
        expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
            'aria-current',
            'page'
        )
        expect(screen.getByRole('link', { name: 'Blog' })).not.toHaveAttribute(
            'aria-current'
        )
        expect(await axeViolations(container)).toEqual([])
    })
})

describe('Nav (subnav and warnings)', () => {
    it('nests a subnav list inside the parent list item', async () => {
        const { container } = render(
            <Nav label="Docs">
                <NavLink
                    href="/components"
                    subnav={<NavLink href="/components/image">Image</NavLink>}
                >
                    Components
                </NavLink>
            </Nav>
        )
        const parent = screen.getByRole('link', { name: 'Components' })
            .parentElement as HTMLElement
        const nested = within(parent).getByRole('list')
        expect(
            within(nested).getByRole('link', { name: 'Image' })
        ).toBeVisible()
        expect(await axeViolations(container)).toEqual([])
    })

    it.each(['Main navigation', 'Hauptnavigation', 'Footer nav'])(
        'warns about the redundant word in label="%s"',
        (label) => {
            const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
            render(
                <Nav label={label}>
                    <NavLink href="/">Home</NavLink>
                </Nav>
            )
            expect(warn).toHaveBeenCalledWith(
                expect.stringContaining('already announce the role')
            )
            warn.mockRestore()
        }
    )

    it('does not warn for a plain label', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(
            <Nav label="Navy blue products">
                <NavLink href="/">Home</NavLink>
            </Nav>
        )
        expect(warn).not.toHaveBeenCalled()
        warn.mockRestore()
    })
})

describe('Table', () => {
    it('renders a captioned table with scoped headers', async () => {
        const { container } = render(
            <Table caption="Opening hours">
                <thead>
                    <tr>
                        <TableHeaderCell scope="col">Day</TableHeaderCell>
                        <TableHeaderCell scope="col">Hours</TableHeaderCell>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableHeaderCell scope="row">Monday</TableHeaderCell>
                        <td>9–17</td>
                    </tr>
                </tbody>
            </Table>
        )
        expect(
            screen.getByRole('table', { name: 'Opening hours' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('rowheader', { name: 'Monday' })
        ).toBeInTheDocument()
        expect(await axeViolations(container)).toEqual([])
    })

    it('wraps the table in a focusable, named scroll region', async () => {
        const { container } = render(
            <Table
                caption="Monthly visitors"
                scrollable
                scrollContainerProps={{ className: 'scroll' }}
            >
                <tbody>
                    <tr>
                        <TableHeaderCell scope="row">Home</TableHeaderCell>
                        <td>1200</td>
                    </tr>
                </tbody>
            </Table>
        )
        const region = screen.getByRole('region', { name: 'Monthly visitors' })
        expect(region).toHaveAttribute('tabindex', '0')
        expect(region).toHaveClass('scroll')
        expect(
            screen.getByRole('table', { name: 'Monthly visitors' })
        ).toBeInTheDocument()
        expect(await axeViolations(container)).toEqual([])
    })
})

describe('SkipLink', () => {
    it('is hidden until focused and moves focus to the target', async () => {
        const user = userEvent.setup()
        render(
            <>
                <SkipLink targetId="content" />
                <main id="content">Content</main>
            </>
        )
        const link = screen.getByRole('link', { name: 'Skip to main content' })
        expect(link).toHaveStyle({ position: 'absolute' })

        await user.tab()
        expect(link).toHaveFocus()
        expect(link).not.toHaveStyle({ position: 'absolute' })

        await user.click(link)
        const main = screen.getByRole('main')
        expect(main).toHaveFocus()
        expect(main).toHaveAttribute('tabindex', '-1')

        await user.tab()
        expect(main).not.toHaveAttribute('tabindex')
    })

    it('keeps a tabindex the target already had', async () => {
        const user = userEvent.setup()
        render(
            <>
                <SkipLink targetId="content" />
                <main id="content" tabIndex={-1}>
                    Content
                </main>
            </>
        )
        await user.click(screen.getByRole('link'))
        await user.tab()
        expect(screen.getByRole('main')).toHaveAttribute('tabindex', '-1')
    })

    it('warns when the target does not exist', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(<SkipLink targetId="missing" />)
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('id="missing"')
        )
        warn.mockRestore()
    })
})

describe('VisuallyHidden', () => {
    it('renders a span by default and a div with as="div"', () => {
        const { container } = render(
            <>
                <VisuallyHidden data-testid="inline">Inline</VisuallyHidden>
                <VisuallyHidden
                    as="div"
                    data-testid="block"
                    style={{ width: 500 }}
                >
                    <p>Block</p>
                </VisuallyHidden>
            </>
        )
        expect(screen.getByTestId('inline').tagName).toBe('SPAN')
        const block = screen.getByTestId('block')
        expect(block.tagName).toBe('DIV')
        expect(block).not.toHaveAttribute('as')
        expect(block).toHaveStyle({ width: '1px', position: 'absolute' })
        expect(container).toHaveTextContent('Block')
    })
})
