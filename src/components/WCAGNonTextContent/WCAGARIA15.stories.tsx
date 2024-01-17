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

export const OneImage: StoryARIA15 = {
    render: () => (
        <>
            <WCAGARIA15Text accessibleId="p1">
                Short text description.
            </WCAGARIA15Text>
            <WCAGARIA15
                accessibleIds="p1 p2"
                imageData={[
                    {
                        altText: 'A happy star.',
                        imageSource: starImage,
                        role: 'separator',
                        height: 50,
                        width: 50,
                    },
                ]}
            />
            <WCAGARIA15Text accessibleId="p2">
                This is the much longer text content of Paragraph 2 which
                describes one happy star looking at you.
            </WCAGARIA15Text>
        </>
    ),
}

export const TwoImages: StoryARIA15 = {
    render: () => (
        <>
            <WCAGARIA15Text accessibleId="p1">
                Short text description.
            </WCAGARIA15Text>
            <WCAGARIA15
                accessibleIds="p1 p2"
                imageData={[
                    {
                        altText: 'A happy star.',
                        imageSource: starImage,
                        height: 50,
                        width: 50,
                    },
                    {
                        altText: 'Another happy star.',
                        imageSource: starImage,
                        height: 50,
                        width: 50,
                    },
                ]}
            />
            <WCAGARIA15Text accessibleId="p2">
                This is the much longer text content of Paragraph 2 which
                describes both images that contain one happy star each looking
                at you.
            </WCAGARIA15Text>
        </>
    ),
}
