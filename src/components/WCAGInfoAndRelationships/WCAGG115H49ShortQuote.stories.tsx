import type { Meta, StoryObj } from '@storybook/react'

import WCAGG115H49ShortQuote from './WCAGG115H49ShortQuote'

const metaG115H49ShortQuote: Meta<typeof WCAGG115H49ShortQuote> = {
    component: WCAGG115H49ShortQuote,
}

export default metaG115H49ShortQuote

type StoryG115H49ShortQuote = StoryObj<typeof WCAGG115H49ShortQuote>

// WCAGG115H49ShortQuote

export const ShortQuote: StoryG115H49ShortQuote = {
    render: () => (
        <>
            <WCAGG115H49ShortQuote>
                The greatest glory in living lies not in never falling, but in
                rising every time we fall.
            </WCAGG115H49ShortQuote>
            <span>&nbsp;- Nelson Mandela</span>
        </>
    ),
}
