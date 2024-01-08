import type { Meta, StoryObj } from '@storybook/react'

import WCAGH24 from './WCAGH24'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH24: Meta<typeof WCAGH24> = {
    component: WCAGH24,
}

export default metaH24

type StoryH24 = StoryObj<typeof WCAGH24>

// WCAGNonTextComponentH24

export const ImageWithOneArea: StoryH24 = {
    render: () => (
        <WCAGH24
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
        <WCAGH24
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
