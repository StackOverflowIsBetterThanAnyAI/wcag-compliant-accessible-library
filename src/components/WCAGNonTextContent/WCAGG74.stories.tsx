import type { Meta, StoryObj } from '@storybook/react'

import WCAGG74 from './WCAGG74'
import WCAGG74Text from './WCAGG74Text'
// @ts-ignore
import starImage from '../../images/star.png'

const metaG74: Meta<typeof WCAGG74> = {
    component: WCAGG74,
}

export default metaG74

type StoryG74 = StoryObj<typeof WCAGG74>

// WCAGNonTextComponentG74

export const Chart: StoryG74 = {
    render: () => (
        <>
            <WCAGG74
                accessibleIds="p1 p2"
                shortText={<p id="p1">Short description</p>}
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGG74>
            <WCAGG74Text accessibleId="p2">
                This is a very long description of the Chart.
            </WCAGG74Text>
        </>
    ),
}
