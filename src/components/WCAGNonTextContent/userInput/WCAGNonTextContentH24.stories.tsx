import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentH24 from './WCAGNonTextContentH24'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaH24: Meta<typeof WCAGNonTextContentH24> = {
    component: WCAGNonTextContentH24,
}

export default metaH24

type StoryH24 = StoryObj<typeof WCAGNonTextContentH24>

// WCAGNonTextComponentH24

export const ImageWithOneArea: StoryH24 = {
    render: () => (
        <WCAGNonTextContentH24
            imageData={{
                imageSource: starImage,
                altText: 'Star',
                height: 50,
                width: 50,
            }}
            mapName="star-map"
            areaData={[
                {
                    altText: 'part1',
                    coords: '0, 0, 45, 45',
                    shape: 'rect',
                    href: 'element1',
                },
            ]}
        />
    ),
}

export const ImageWithTwoAreas: StoryH24 = {
    render: () => (
        <WCAGNonTextContentH24
            imageData={{
                imageSource: starImage,
                altText: 'Star',
                height: 50,
                width: 50,
            }}
            mapName="star-map"
            areaData={[
                {
                    altText: 'part1',
                    coords: '0, 0, 15, 15',
                    shape: 'rect',
                    href: 'element1',
                },
                {
                    altText: 'part2',
                    coords: '25, 25, 45, 45',
                    shape: 'rect',
                    href: 'element2',
                },
            ]}
        />
    ),
}
