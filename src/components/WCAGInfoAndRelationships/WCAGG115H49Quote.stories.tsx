import type { Meta, StoryObj } from '@storybook/react'

import WCAGG115H49Quote from './WCAGG115H49Quote'

const metaG115H49Quote: Meta<typeof WCAGG115H49Quote> = {
    component: WCAGG115H49Quote,
}

export default metaG115H49Quote

type StoryG115H49Quote = StoryObj<typeof WCAGG115H49Quote>

// WCAGG115H49Quote

export const Quote: StoryG115H49Quote = {
    render: () => (
        <>
            <WCAGG115H49Quote>
                The greatest glory in living lies not in never falling, but in
                rising every time we fall.
            </WCAGG115H49Quote>
            <span>-Nelson Mandela</span>
        </>
    ),
}
