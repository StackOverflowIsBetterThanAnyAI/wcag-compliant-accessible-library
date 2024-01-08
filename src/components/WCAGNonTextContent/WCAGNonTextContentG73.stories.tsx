import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentG73 from './WCAGNonTextContentG73'
import WCAGNonTextContentG73Text from './WCAGNonTextContentG73Text'
// @ts-ignore
import starImage from '../../images/star.png'

const metaG73: Meta<typeof WCAGNonTextContentG73> = {
    component: WCAGNonTextContentG73,
}

export default metaG73

type StoryG73 = StoryObj<typeof WCAGNonTextContentG73>

// WCAGNonTextComponentG73

export const Chart: StoryG73 = {
    render: () => (
        <>
            <WCAGNonTextContentG73
                childId="long-description1"
                buttonText="Go to the long description."
                ownId="chart"
                shortText={<p>Short description.</p>}
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGNonTextContentG73>
            <WCAGNonTextContentG73Text
                buttonText="Go back to the stars."
                ownId="long-description"
                parentId="chart"
            >
                This is a very long description of three star images.
            </WCAGNonTextContentG73Text>
        </>
    ),
}
