import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA2H65 from './WCAGARIA2H65'
// @ts-ignore
import starImage from '../../images/star.png'

const metaARIA2H65: Meta<typeof WCAGARIA2H65> = {
    component: WCAGARIA2H65,
}

export default metaARIA2H65

type StoryARIA2H65 = StoryObj<typeof WCAGARIA2H65>

// WCAGNonTextComponentARIA2H65

export const Text: StoryARIA2H65 = {
    render: () => (
        <WCAGARIA2H65
            id="input-1"
            inputType="text"
            title="This is a text input."
        />
    ),
}

export const Number: StoryARIA2H65 = {
    render: () => (
        <WCAGARIA2H65
            id="input-2"
            inputType="number"
            placeholder="0"
            min="0"
            max="10"
            title="This is a number input."
        />
    ),
}
