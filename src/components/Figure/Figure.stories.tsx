import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from '../Image/Image.js'
import { visuallyHiddenStyle } from '../VisuallyHidden/VisuallyHidden.js'
import { Figure, FigureCaption, FigureDescription } from './Figure.js'

const meta = {
    title: 'Text alternatives/Figure',
    component: Figure,
    subcomponents: { FigureCaption, FigureDescription },
    args: { className: 'demo-figure' },
} satisfies Meta<typeof Figure>

export default meta
type Story = StoryObj<typeof meta>

/** A complex image with a short caption and a visible long description (G74). */
export const WithLongDescription: Story = {
    render: (args) => (
        <Figure {...args}>
            <Image
                src="/assets/star.png"
                alt="Star chart"
                width={96}
                height={96}
            />
            <FigureCaption>Customer satisfaction 2025</FigureCaption>
            <FigureDescription className="demo-description">
                Ratings rose from 3.8 stars in January to 4.6 stars in December,
                with the largest jump after the support team doubled in June.
            </FigureDescription>
        </Figure>
    ),
}

/** The long description can be visually hidden and still be announced. */
export const HiddenDescription: Story = {
    render: (args) => (
        <Figure {...args}>
            <Image
                src="/assets/star.png"
                alt="Star chart"
                width={96}
                height={96}
            />
            <FigureCaption>Customer satisfaction 2025</FigureCaption>
            <FigureDescription style={visuallyHiddenStyle}>
                Ratings rose from 3.8 stars in January to 4.6 stars in December.
            </FigureDescription>
        </Figure>
    ),
}
