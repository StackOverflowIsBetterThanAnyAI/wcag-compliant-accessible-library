import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA15 from './WCAGARIA15'
import WCAGARIA15Text from './WCAGARIA15Text'
// @ts-ignore
import starImage from '../../images/star.png'

const metaARIA15: Meta<typeof WCAGARIA15> = {
    component: WCAGARIA15,
}

export default metaARIA15

type StoryARIA15 = StoryObj<typeof WCAGARIA15>

// WCAGNonTextComponentARIA15

export const Image: StoryARIA15 = {
    render: () => (
        <>
            <WCAGARIA15Text accessibleId="p1">
                Short text content.
            </WCAGARIA15Text>
            <WCAGARIA15
                accessibleIds="p1 p2"
                altText="Happy Star"
                imageData={{ imageSource: starImage, height: 150, width: 150 }}
            />
            <WCAGARIA15Text accessibleId="p2">
                This is the much longer text content of Paragraph 2.
            </WCAGARIA15Text>
        </>
    ),
}
