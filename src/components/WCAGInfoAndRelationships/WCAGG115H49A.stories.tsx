import type { Meta, StoryObj } from '@storybook/react'

import WCAGG115H49A from './WCAGG115H49A'

const metaG115H49A: Meta<typeof WCAGG115H49A> = {
    component: WCAGG115H49A,
}

export default metaG115H49A

type StoryG115H49A = StoryObj<typeof WCAGG115H49A>

// WCAGG115H49A

export const A: StoryG115H49A = {
    render: () => (
        <WCAGG115H49A linkData={{ href: '/' }}>Download now!</WCAGG115H49A>
    ),
}
