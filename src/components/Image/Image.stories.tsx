import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from './Image.js'

const meta = {
    title: 'Text alternatives/Image',
    component: Image,
    args: { src: '/assets/star.png', width: 64, height: 64 },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

/** An image that conveys information needs an `alt` describing that information. */
export const Informative: Story = {
    args: { alt: 'Favourite' },
}

/** Purely decorative images are hidden from screen readers with `decorative`. */
export const Decorative: Story = {
    args: { decorative: true },
}

/** Every native attribute, `className`, `style` and `ref` are passed straight to the `<img>`. */
export const CustomStyling: Story = {
    args: {
        alt: 'Favourite',
        style: { borderRadius: '50%', boxShadow: '0 0 0 4px #e8a400' },
        loading: 'lazy',
    },
}
