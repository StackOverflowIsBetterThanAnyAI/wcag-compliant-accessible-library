import type { Meta, StoryObj } from '@storybook/react'

import WCAGG115H49B from './WCAGG115H49B'

const metaG115H49B: Meta<typeof WCAGG115H49B> = {
    component: WCAGG115H49B,
}

export default metaG115H49B

type StoryG115H49B = StoryObj<typeof WCAGG115H49B>

// WCAGG115H49B

export const B: StoryG115H49B = {
    render: () => (
        <div>
            Hello, my name is&nbsp;
            <WCAGG115H49B>Michael Smiths</WCAGG115H49B>.
        </div>
    ),
}
