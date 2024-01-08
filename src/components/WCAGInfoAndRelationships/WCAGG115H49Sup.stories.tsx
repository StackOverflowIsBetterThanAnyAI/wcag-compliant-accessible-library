import type { Meta, StoryObj } from '@storybook/react'

import WCAGG115H49Sup from './WCAGG115H49Sup'

const metaG115H49Sup: Meta<typeof WCAGG115H49Sup> = {
    component: WCAGG115H49Sup,
}

export default metaG115H49Sup

type StoryG115H49Sup = StoryObj<typeof WCAGG115H49Sup>

// WCAGG115H49Sup

export const Sup: StoryG115H49Sup = {
    render: () => (
        <div>
            Hello, my name is&nbsp;
            <WCAGG115H49Sup>Michael Smith</WCAGG115H49Sup>.
        </div>
    ),
}
