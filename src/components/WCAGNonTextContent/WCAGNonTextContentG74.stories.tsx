import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentG74 from './WCAGNonTextContentG74'
import WCAGNonTextContentG74Text from './WCAGNonTextContentG74Text'
// @ts-ignore
import starImage from '../../images/star.png'

const metaG74: Meta<typeof WCAGNonTextContentG74> = {
    component: WCAGNonTextContentG74,
}

export default metaG74

type StoryG74 = StoryObj<typeof WCAGNonTextContentG74>

// WCAGNonTextComponentG74

export const Chart: StoryG74 = {
    render: () => (
        <>
            <WCAGNonTextContentG74
                accessibleIds="p1 p2"
                shortText={<p id="p1">Short description</p>}
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGNonTextContentG74>
            <WCAGNonTextContentG74Text accessibleId="p2">
                This is a very long description of the Chart.
            </WCAGNonTextContentG74Text>
        </>
    ),
}
