//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'

import WCAGH86 from './WCAGH86'
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
        <WCAGH86 element="abbr" accessibleText="See you later!">
            CU l8r
        </WCAGH86>
    ),
}

export const TextWithDiv: StoryH86 = {
    render: () => (
        <WCAGH86 element="div" accessibleText="a sqaure" role="img">
            o o o o o o o
            <br />
            o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o
            <br />
            o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o
            <br />
            o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o
            <br />o o o o o o o
        </WCAGH86>
    ),
}

export const WrongAccessibleText: StoryH86 = {
    render: () => (
        <WCAGH86 element="span" accessibleText="" role="img">
            :)
        </WCAGH86>
    ),
}
