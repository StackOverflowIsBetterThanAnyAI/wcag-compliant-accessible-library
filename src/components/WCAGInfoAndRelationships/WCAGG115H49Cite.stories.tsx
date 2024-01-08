import type { Meta, StoryObj } from '@storybook/react'

import WCAGG115H49Cite from './WCAGG115H49Cite'

const metaG115H49Cite: Meta<typeof WCAGG115H49Cite> = {
    component: WCAGG115H49Cite,
}

export default metaG115H49Cite

type StoryG115H49Cite = StoryObj<typeof WCAGG115H49Cite>

// WCAGG115H49Cite

export const Cite: StoryG115H49Cite = {
    render: () => <WCAGG115H49Cite>Michael Smiths, 1999</WCAGG115H49Cite>,
}
