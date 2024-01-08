import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentH67 from './WCAGNonTextContentH67'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH67: Meta<typeof WCAGNonTextContentH67> = {
    component: WCAGNonTextContentH67,
}

export default metaH67

type StoryH67 = StoryObj<typeof WCAGNonTextContentH67>

// WCAGNonTextComponentH67

export const IgnoredImage: StoryH67 = {
    render: () => (
        <>
            <p>Text before image</p>
            <WCAGNonTextContentH67
                imageData={{
                    imageSource: starImage,
                    loading: 'lazy',
                    additionalStyling: { height: 75, width: 75 },
                }}
            />
            <p>Text after image</p>
        </>
    ),
}
