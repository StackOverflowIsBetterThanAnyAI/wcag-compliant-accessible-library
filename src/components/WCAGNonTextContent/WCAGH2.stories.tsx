import type { Meta, StoryObj } from '@storybook/react'

import WCAGH2 from './WCAGH2'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH2: Meta<typeof WCAGH2> = {
    component: WCAGH2,
}

export default metaH2

type StoryH2 = StoryObj<typeof WCAGH2>

// WCAGNonTextComponentH2

export const ImageAndLink: StoryH2 = {
    render: () => (
        <WCAGH2
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
        >
            Go to the home page
        </WCAGH2>
    ),
}

export const ImageAndLinkWithAlt: StoryH2 = {
    render: () => (
        <WCAGH2
            altText="Go to the home page"
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
        >
            Go
        </WCAGH2>
    ),
}

export const TextContentIsADiv: StoryH2 = {
    render: () => (
        <WCAGH2
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
        >
            <div>Go to the home page</div>
        </WCAGH2>
    ),
}

export const TextBeforeImage: StoryH2 = {
    render: () => (
        <WCAGH2
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
            textBeforeImage
        >
            <div style={{ color: '#020202' }}>Go to the home page</div>
        </WCAGH2>
    ),
}
