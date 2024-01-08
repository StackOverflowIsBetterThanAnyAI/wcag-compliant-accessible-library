import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentH37 from './WCAGNonTextContentH37'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH37: Meta<typeof WCAGNonTextContentH37> = {
    component: WCAGNonTextContentH37,
}

export default metaH37

type StoryH37 = StoryObj<typeof WCAGNonTextContentH37>

// WCAGNonTextComponentH37

export const ImageWithAltAttribute: StoryH37 = {
    render: () => (
        <WCAGNonTextContentH37
            altText="four out of five"
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
        />
    ),
}
