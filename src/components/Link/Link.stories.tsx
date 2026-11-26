import type { Meta, StoryObj } from '@storybook/react-vite'

import { Link } from './Link.js'

const meta = {
    title: 'Navigation/Link',
    component: Link,
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { href: '#docs', children: 'Read the docs' },
}

/** Screen readers hear "Example (opens in a new tab)"; `rel="noopener"` is added. */
export const NewTab: Story = {
    args: {
        href: 'https://example.com',
        target: '_blank',
        children: 'Example',
    },
}

/**
 * A visible hint for sighted users, styled with
 * `a[target="_blank"]::after { content: " ↗"; }`. The arrow is CSS generated content;
 * screen readers get the text hint instead.
 */
export const VisibleNewTabHint: Story = {
    args: {
        href: 'https://example.com',
        target: '_blank',
        className: 'demo-link',
        children: 'Example',
    },
}

/**
 * An `aria-label` replaces the link text, so the hint is appended to the label.
 * Keep the visible text at the start of the label (WCAG 2.5.3 Label in Name).
 */
export const WithAriaLabel: Story = {
    args: {
        href: 'https://example.com/report.pdf',
        target: '_blank',
        'aria-label': 'Annual report 2025, PDF, 2 MB',
        children: 'Annual report 2025',
    },
}

/** Localised hint for non-English pages. */
export const LocalisedHint: Story = {
    args: {
        href: 'https://example.com',
        target: '_blank',
        lang: 'de',
        newTabHint: ' (öffnet in neuem Tab)',
        children: 'Beispiel',
    },
}

/** Use `render` to plug in your router's link component; all props are forwarded. */
export const WithRouterLink: Story = {
    args: {
        href: '/settings',
        children: 'Settings',
        render: ({ children, ...props }) => (
            <a {...props} data-router-link="">
                {children}
            </a>
        ),
    },
}
