import type { Meta, StoryObj } from '@storybook/react-vite'

import { Emoji } from './Emoji.js'

const meta = {
    title: 'Text alternatives/Emoji',
    component: Emoji,
} satisfies Meta<typeof Emoji>

export default meta
type Story = StoryObj<typeof meta>

/** The label says what the emoji means here, not what it looks like. */
export const Meaningful: Story = {
    args: { label: 'Warning', children: '⚠️' },
}

/** ASCII emoticons are read character by character unless labelled. */
export const Emoticon: Story = {
    args: { label: 'Smiling', children: ':-)' },
}

/** Decoration only: hidden from screen readers. */
export const Decorative: Story = {
    args: { decorative: true, children: '✨' },
}
