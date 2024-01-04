import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentG196 from './WCAGNonTextContentG196'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaG196: Meta<typeof WCAGNonTextContentG196> = {
    component: WCAGNonTextContentG196,
}

export default metaG196

type StoryG196 = StoryObj<typeof WCAGNonTextContentG196>

// WCAGNonTextComponentG196

export const ImageWithEmptyArray: StoryG196 = {
    render: () => (
        <WCAGNonTextContentG196 altText="four out of five" imageData={[]} />
    ),
}

export const ImageWithOneStar: StoryG196 = {
    render: () => (
        <WCAGNonTextContentG196
            altText="four out of five"
            imageData={[{ imageSource: starImage }]}
        />
    ),
}

export const ImageWithOneStarAndSize: StoryG196 = {
    render: () => (
        <WCAGNonTextContentG196
            altText="four out of five"
            imageData={[
                { imageSource: starImage, height: 200, width: '200px' },
            ]}
        />
    ),
}

export const ImageWithAdditionalStyling: StoryG196 = {
    render: () => (
        <WCAGNonTextContentG196
            altText="four out of five"
            imageData={[
                { imageSource: starImage, height: 75, width: 75 },
                { imageSource: starImage, height: 75, width: 75 },
                { imageSource: starImage, height: 75, width: 75 },
                { imageSource: starImage, height: 75, width: 75 },
                {
                    imageSource: starImage,
                    additionalStyling: { height: 125, width: 125 },
                },
            ]}
        />
    ),
}
