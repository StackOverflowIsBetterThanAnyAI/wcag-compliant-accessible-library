import type { Meta, StoryObj } from '@storybook/react'

import WCAGG115H49Strong from './WCAGG115H49Strong'

const metaG115H49Strong: Meta<typeof WCAGG115H49Strong> = {
    component: WCAGG115H49Strong,
}

export default metaG115H49Strong

type StoryG115H49Strong = StoryObj<typeof WCAGG115H49Strong>

// WCAGG115H49Strong

export const Strong: StoryG115H49Strong = {
    render: () => (
        <div>
            Hello, my name is&nbsp;
            <WCAGG115H49Strong>Michael Smith</WCAGG115H49Strong>.
        </div>
    ),
}
