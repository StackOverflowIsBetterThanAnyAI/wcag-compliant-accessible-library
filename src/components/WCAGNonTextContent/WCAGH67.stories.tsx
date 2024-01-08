import type { Meta, StoryObj } from '@storybook/react'

import WCAGH67 from './WCAGH67'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH67: Meta<typeof WCAGH67> = {
    component: WCAGH67,
}

export default metaH67

type StoryH67 = StoryObj<typeof WCAGH67>

// WCAGNonTextComponentH67

export const IgnoredImage: StoryH67 = {
    render: () => (
        <>
            <p>Text before image</p>
            <WCAGH67
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
