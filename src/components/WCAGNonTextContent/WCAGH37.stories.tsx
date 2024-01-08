import type { Meta, StoryObj } from '@storybook/react'

import WCAGH37 from './WCAGH37'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH37: Meta<typeof WCAGH37> = {
    component: WCAGH37,
}

export default metaH37

type StoryH37 = StoryObj<typeof WCAGH37>

// WCAGNonTextComponentH37

export const ImageWithAltAttribute: StoryH37 = {
    render: () => (
        <WCAGH37
            altText="four out of five"
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
        />
    ),
}
