import type { Meta, StoryObj } from '@storybook/react-vite'

import { Landmark } from './Landmark.js'

const meta = {
    title: 'Structure/Landmark',
    component: Landmark,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Landmark>

export default meta
type Story = StoryObj<typeof meta>

/** A page skeleton. Screen reader users can jump between these regions. */
export const PageLayout: Story = {
    args: { as: 'main' },
    render: () => (
        <>
            <Landmark
                as="header"
                style={{ padding: '1rem', background: '#f2f2f7' }}
            >
                Header
            </Landmark>
            <Landmark as="main" style={{ padding: '1rem' }}>
                <Landmark as="section" labelledBy="news-heading">
                    <h2 id="news-heading">Latest news</h2>
                    <p>Sections are only landmarks when they are named.</p>
                </Landmark>
                <Landmark as="search" label="Site">
                    <input type="search" aria-label="Search the site" />
                </Landmark>
            </Landmark>
            <Landmark
                as="footer"
                style={{ padding: '1rem', background: '#f2f2f7' }}
            >
                Footer
            </Landmark>
        </>
    ),
}
