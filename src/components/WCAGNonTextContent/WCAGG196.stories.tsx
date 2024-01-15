import type { Meta, StoryObj } from '@storybook/react'

import WCAGG196 from './WCAGG196'
// @ts-ignore
import starImage from '../../images/star.png'

const metaG196: Meta<typeof WCAGG196> = {
    component: WCAGG196,
}

export default metaG196

type StoryG196 = StoryObj<typeof WCAGG196>

// WCAGNonTextComponentG196

export const ImageWithOneStar: StoryG196 = {
    render: () => (
        <WCAGG196
            altText="four out of five"
            imageData={[{ imageSource: starImage }]}
        />
    ),
}

export const ImageWithOneStarAndSize: StoryG196 = {
    render: () => (
        <WCAGG196
            altText="four out of five"
            imageData={[
                { imageSource: starImage, height: 200, width: '200px' },
            ]}
        />
    ),
}

export const ImageWithAdditionalAttributes: StoryG196 = {
    render: () => (
        <WCAGG196
            altText="four out of five"
            imageData={[
                {
                    imageSource: starImage,
                    height: 25,
                    width: 25,
                    loading: 'lazy',
                    referrerpolicy: 'no-referrer',
                },
                {
                    imageSource: starImage,
                    height: 35,
                    width: 35,
                    loading: 'lazy',
                    referrerpolicy: 'no-referrer-when-downgrade',
                },
                {
                    imageSource: starImage,
                    height: 45,
                    width: 45,
                    loading: 'lazy',
                    referrerpolicy: 'origin',
                },
                {
                    imageSource: starImage,
                    height: 55,
                    width: 55,
                    loading: 'eager',
                    referrerpolicy: 'origin-when-cross-origin',
                },
                {
                    imageSource: starImage,
                    height: 65,
                    width: 65,
                    loading: 'eager',
                    referrerpolicy: 'same-origin',
                },
            ]}
        />
    ),
}
