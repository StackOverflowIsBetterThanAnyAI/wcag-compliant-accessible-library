import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentARIA15 from './WCAGNonTextContentARIA15'
import WCAGNonTextContentARIA15Text from './WCAGNonTextContentARIA15Text'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaARIA15: Meta<typeof WCAGNonTextContentARIA15> = {
    component: WCAGNonTextContentARIA15,
}

export default metaARIA15

type StoryARIA15 = StoryObj<typeof WCAGNonTextContentARIA15>

// WCAGNonTextComponentARIA15

export const Image: StoryARIA15 = {
    render: () => (
        <>
            <WCAGNonTextContentARIA15Text accessibleId="p1">
                Short text content.
            </WCAGNonTextContentARIA15Text>
            <WCAGNonTextContentARIA15
                accessibleIds="p1 p2"
                altText="Happy Star"
                imageData={{ imageSource: starImage, height: 150, width: 150 }}
            />
            <WCAGNonTextContentARIA15Text accessibleId="p2">
                This is the musch longer text content of Paragraph 2.
            </WCAGNonTextContentARIA15Text>
        </>
    ),
}
