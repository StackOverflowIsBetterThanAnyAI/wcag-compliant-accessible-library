import type { Meta, StoryObj } from '@storybook/react'

import WCAGH30 from './WCAGH30'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH30: Meta<typeof WCAGH30> = {
    component: WCAGH30,
}

export default metaH30

type StoryH30 = StoryObj<typeof WCAGH30>

// WCAGNonTextComponentH30

export const AnchorWithText: StoryH30 = {
    render: () => <WCAGH30 link="#" preImageText="Go to the home page" />,
}

export const AnchorWithImage: StoryH30 = {
    render: () => (
        <WCAGH30
            imageData={[
                {
                    imageSource: starImage,
                    altText: 'Go to the home page',
                    height: 75,
                    width: 75,
                },
            ]}
            link="#"
        />
    ),
}

export const AnchorWithImageAndPostImageText: StoryH30 = {
    render: () => (
        <WCAGH30
            imageData={[{ imageSource: starImage, height: 75, width: 75 }]}
            link="#"
            postImageText={<div>Go to the home page</div>}
        />
    ),
}

export const AnchorWithMultipleImages: StoryH30 = {
    render: () => (
        <WCAGH30
            imageData={[
                {
                    imageSource: starImage,
                    height: 75,
                    width: 75,
                    altText: 'Home Page',
                },
                {
                    imageSource: starImage,
                    height: 75,
                    width: 75,
                    altText: 'Home Page',
                },
            ]}
            link="#"
            postImageText="Go to the home page"
        />
    ),
}

export const AnchorWithImageAndPreImageText: StoryH30 = {
    render: () => (
        <WCAGH30
            imageData={[{ imageSource: starImage, height: 75, width: 75 }]}
            link="#"
            preImageText={<div>Go to the home page</div>}
        />
    ),
}