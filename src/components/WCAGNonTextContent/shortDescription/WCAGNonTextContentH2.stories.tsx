import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentH2 from './WCAGNonTextContentH2'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaH2: Meta<typeof WCAGNonTextContentH2> = {
    component: WCAGNonTextContentH2,
}

export default metaH2

type StoryH2 = StoryObj<typeof WCAGNonTextContentH2>

// WCAGNonTextComponentH2

export const ImageAndLink: StoryH2 = {
    render: () => (
        <WCAGNonTextContentH2
            altText="four out of five"
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
        >
            Go to the home page
        </WCAGNonTextContentH2>
    ),
}

export const TextContentIsADiv: StoryH2 = {
    render: () => (
        <WCAGNonTextContentH2
            altText="four out of five"
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
            textBeforeImage
        >
            <div style={{ color: '#050505' }}>Go to the home page</div>
        </WCAGNonTextContentH2>
    ),
}
