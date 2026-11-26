import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkipLink } from './SkipLink.js'

const meta = {
    title: 'Navigation/SkipLink',
    component: SkipLink,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SkipLink>

export default meta
type Story = StoryObj<typeof meta>

/** Click into the canvas and press Tab: the link appears and jumps past the navigation. */
export const Default: Story = {
    args: { targetId: 'main-content', className: 'demo-skip-link' },
    render: (args) => (
        <>
            <SkipLink {...args} />
            <nav
                aria-label="Main"
                style={{ padding: '1rem', background: '#f2f2f7' }}
            >
                <a href="#a">One</a> · <a href="#b">Two</a> ·{' '}
                <a href="#c">Three</a>
            </nav>
            <main id="main-content" style={{ padding: '1rem' }}>
                Main content
            </main>
        </>
    ),
}
