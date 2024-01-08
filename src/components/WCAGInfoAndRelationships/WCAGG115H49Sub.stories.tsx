import type { Meta, StoryObj } from '@storybook/react'

import WCAGG115H49Sub from './WCAGG115H49Sub'

const metaG115H49Sub: Meta<typeof WCAGG115H49Sub> = {
    component: WCAGG115H49Sub,
}

export default metaG115H49Sub

type StoryG115H49Sub = StoryObj<typeof WCAGG115H49Sub>

// WCAGG115H49Sub

export const Sub: StoryG115H49Sub = {
    render: () => (
        <div>
            Hello, my name is&nbsp;
            <WCAGG115H49Sub>Michael Smith</WCAGG115H49Sub>.
        </div>
    ),
}
