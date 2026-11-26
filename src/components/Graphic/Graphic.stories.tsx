import type { Meta, StoryObj } from '@storybook/react-vite'

import { Graphic } from './Graphic.js'

const meta = {
    title: 'Text alternatives/Graphic',
    component: Graphic,
} satisfies Meta<typeof Graphic>

export default meta
type Story = StoryObj<typeof meta>

/** Several characters that only make sense together become one image with one name. */
export const RatingStars: Story = {
    args: {
        label: 'Rating: 4 out of 5 stars',
        className: 'demo-graphic',
        children: '★★★★☆',
    },
}

/** An inline SVG named by a visible heading via `labelledBy`. */
export const LabelledByHeading: Story = {
    args: {
        labelledBy: 'chart-title',
        children: (
            <svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                aria-hidden="true"
            >
                <rect x="5" y="30" width="25" height="30" fill="#0b57d0" />
                <rect x="45" y="15" width="25" height="45" fill="#0b57d0" />
                <rect x="85" y="0" width="25" height="60" fill="#0b57d0" />
            </svg>
        ),
    },
    decorators: [
        (Story) => (
            <div>
                <h3 id="chart-title">Visitors are growing every month</h3>
                <Story />
            </div>
        ),
    ],
}
