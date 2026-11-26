import type { Meta, StoryObj } from '@storybook/react-vite'

import { List } from './List.js'

const meta = {
    title: 'Structure/List',
    component: List,
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

/** Bullets removed with CSS, list semantics kept (also in Safari/VoiceOver). */
export const Unstyled: Story = {
    args: {
        style: { listStyle: 'none', padding: 0, display: 'flex', gap: '1rem' },
        children: (
            <>
                <li>Apples</li>
                <li>Pears</li>
                <li>Plums</li>
            </>
        ),
    },
}

export const Ordered: Story = {
    args: {
        ordered: true,
        children: (
            <>
                <li>Preheat the oven</li>
                <li>Mix the dough</li>
                <li>Bake for 20 minutes</li>
            </>
        ),
    },
}
