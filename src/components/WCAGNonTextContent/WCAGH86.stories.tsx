import type { Meta, StoryObj } from '@storybook/react'

import WCAGH86 from './WCAGH86'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH86: Meta<typeof WCAGH86> = {
    component: WCAGH86,
}

export default metaH86

type StoryH86 = StoryObj<typeof WCAGH86>

// WCAGNonTextComponentH86

export const TextWithSpan: StoryH86 = {
    render: () => (
        <WCAGH86 element="span" accessibleText="smile" role="img">
            :)
        </WCAGH86>
    ),
}

export const TextWithAbbr: StoryH86 = {
    render: () => (
        <WCAGH86 element="abbr" accessibleText="Austin Rocks">
            Au5t1N r0xx0rz
        </WCAGH86>
    ),
}

export const TextWithDiv: StoryH86 = {
    render: () => (
        <WCAGH86 element="div" accessibleText="a lot of o's" role="img">
            <div>ooooo ooooo ooo oo o o oooooo</div>
        </WCAGH86>
    ),
}
