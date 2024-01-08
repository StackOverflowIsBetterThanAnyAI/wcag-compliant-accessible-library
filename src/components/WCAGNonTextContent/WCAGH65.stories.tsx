import type { Meta, StoryObj } from '@storybook/react'

import WCAGH65 from './WCAGH65'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH65: Meta<typeof WCAGH65> = {
    component: WCAGH65,
}

export default metaH65

type StoryH65 = StoryObj<typeof WCAGH65>

// WCAGNonTextComponentH65

export const Text: StoryH65 = {
    render: () => (
        <WCAGH65 id="input-1" inputType="text" title="This is a text input." />
    ),
}

export const Number: StoryH65 = {
    render: () => (
        <WCAGH65
            id="input-2"
            inputType="number"
            placeholder="0"
            min="0"
            max="10"
            title="This is a number input."
        />
    ),
}
