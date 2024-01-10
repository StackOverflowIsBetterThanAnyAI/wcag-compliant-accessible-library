import type { Meta, StoryObj } from '@storybook/react'

import WCAGH48 from './WCAGH48'

const metaH48: Meta<typeof WCAGH48> = {
    component: WCAGH48,
}

export default metaH48

type StoryH48 = StoryObj<typeof WCAGH48>

// WCAGNonTextComponentH48

export const OrderedAnimalsWithChildren: StoryH48 = {
    render: () => (
        <WCAGH48 listType="ordered">
            <li>
                <a href="kitchen.html">Kitchen</a>
            </li>
            <li>
                <a href="bedbath.html">Bed &amp; Bath</a>
            </li>
            <li>
                <a href="dining.html">Fine Dining</a>
            </li>
            <li>
                <a href="lighting.html">Lighting</a>
            </li>
            <li>
                <a href="storage.html">Storage</a>
            </li>
        </WCAGH48>
    ),
}

export const OrderedAnimals: StoryH48 = {
    render: () => (
        <WCAGH48
            listType="ordered"
            listItems={[
                'Kitchen',
                'Bed and Bath',
                'Fine Dining',
                'Lighting',
                'Storage',
            ]}
        ></WCAGH48>
    ),
}

export const UnorderedAnimals: StoryH48 = {
    render: () => (
        <WCAGH48
            listType="unordered"
            listItems={[
                'Kitchen',
                'Bed and Bath',
                'Fine Dining',
                'Lighting',
                'Storage',
            ]}
        ></WCAGH48>
    ),
}

export const Description: StoryH48 = {
    render: () => (
        <WCAGH48
            listType="description"
            listItems={[
                'blink',
                'turn on and off between 0.5 and 3 times per second',
            ]}
        ></WCAGH48>
    ),
}

export const DescriptionWithMapping: StoryH48 = {
    render: () => (
        <WCAGH48
            listType="description"
            listItems={[
                'blink 1',
                'turn on and off between 0.25 and 3 times per second',
                'blink 2',
                'turn on and off between 0.5 and 4 times per second',
                'blink 3',
                'turn on and off between 0.75 and 5 times per second',
            ]}
        ></WCAGH48>
    ),
}
