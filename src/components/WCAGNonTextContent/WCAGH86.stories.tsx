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
        <WCAGH86
            element="span"
            accessibleText="smile"
            role="img"
            originalText=":)"
        />
    ),
}

export const TextWithAbbr: StoryH86 = {
    render: () => (
        <WCAGH86
            element="abbr"
            accessibleText="Austin Rocks"
            originalText="Au5t1N r0xx0rz"
        />
    ),
}

export const TextWithDiv: StoryH86 = {
    render: () => (
        <WCAGH86
            element="div"
            accessibleText="a lot of o's"
            originalText={<div>ooooo ooooo ooo oo o o oooooo</div>}
            role="img"
        />
    ),
}

export const TextWithSkipLink: StoryH86 = {
    render: () => (
        <WCAGH86
            element="skip"
            descriptionText="Figure 1: ASCII art picture of a butterfly."
            skipId="skipbutterfly"
            accessibleText="Skip ASCII butterfly image"
            originalText="    LLLLLLL   LLLLLL L L LL LLLLLLLLLLLLLLLLLLL LLLLLLLLLLLLLLLLLLLLL LLLLLLLL LLLLLLLLLLL LLLLLLL LLLLLLLLLL LLL LLLLLLL LLLL L L L LL L L L LLL L L L L L L L L L L L L  L L L L  L LL"
        >
            <div>New content after the ASCII image.</div>
        </WCAGH86>
    ),
}
