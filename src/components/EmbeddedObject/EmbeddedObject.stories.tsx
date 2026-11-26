import type { Meta, StoryObj } from '@storybook/react-vite'

import { EmbeddedObject } from './EmbeddedObject.js'

const meta = {
    title: 'Text alternatives/EmbeddedObject',
    component: EmbeddedObject,
} satisfies Meta<typeof EmbeddedObject>

export default meta
type Story = StoryObj<typeof meta>

/**
 * `title` names the resource when it loads. If it cannot be displayed, the fallback content
 * is shown and announced instead.
 */
export const WithFallback: Story = {
    args: {
        data: '/assets/does-not-exist.pdf',
        type: 'application/pdf',
        title: 'Annual report 2025 (PDF)',
        width: 320,
        height: 120,
        children: (
            <p>
                The annual report could not be displayed.{' '}
                <a href="/assets/does-not-exist.pdf">
                    Download the annual report (PDF)
                </a>
                .
            </p>
        ),
    },
}
