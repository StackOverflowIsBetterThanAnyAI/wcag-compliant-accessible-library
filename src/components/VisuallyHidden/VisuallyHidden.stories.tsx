import type { Meta, StoryObj } from '@storybook/react-vite'

import { VisuallyHidden } from './VisuallyHidden.js'

const meta = {
    title: 'Utilities/VisuallyHidden',
    component: VisuallyHidden,
} satisfies Meta<typeof VisuallyHidden>

export default meta
type Story = StoryObj<typeof meta>

/** An icon-only button that still has a name for screen readers. */
export const IconButton: Story = {
    render: () => (
        <button type="button">
            <span aria-hidden="true">✕</span>
            <VisuallyHidden>Close dialog</VisuallyHidden>
        </button>
    ),
}

/** Block content (paragraphs, lists) needs `as="div"`: a `span` must not contain block elements. */
export const BlockContent: Story = {
    render: () => (
        <section aria-labelledby="pricing-heading">
            <h2 id="pricing-heading">Pricing</h2>
            <VisuallyHidden as="div">
                <p>The table below compares three plans.</p>
                <p>Prices include VAT.</p>
            </VisuallyHidden>
            <p>Starter · Pro · Team</p>
        </section>
    ),
}
