import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
    component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    render: () => <Button primary label="Button" />,
}

export const Secondary: Story = {
    render: () => <Button primary={false} label="Button" />,
}
