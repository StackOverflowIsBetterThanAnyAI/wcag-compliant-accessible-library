import type { Meta, StoryObj } from '@storybook/react'

import WCAGG117H48 from './WCAGG117H48'

const metaG117H48: Meta<typeof WCAGG117H48> = {
    component: WCAGG117H48,
}

export default metaG117H48

type StoryG117H48 = StoryObj<typeof WCAGG117H48>

// WCAGNonTextComponentG117H48

export const OrderedAnimalsWithChildren: StoryG117H48 = {
    render: () => (
        <WCAGG117H48 listType="ordered">
            <li>
                <a href="kitchen.html">
                    <strong>Kitchen (new)</strong>
                </a>
            </li>
            <li>
                <a href="bedbath.html">
                    <strong>Bed &amp; Bath (new)</strong>
                </a>
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
        </WCAGG117H48>
    ),
}

export const OrderedAnimals: StoryG117H48 = {
    render: () => (
        <WCAGG117H48
            listType="ordered"
            listItems={[
                {
                    itemName: 'Kitchen (new)',
                    new: true,
                },
                {
                    itemName: 'Bed and Bath (new)',
                    new: true,
                },
                {
                    itemName: 'Fine Dining',
                },
                {
                    itemName: 'Lighting',
                },
                {
                    itemName: 'Storage',
                },
            ]}
        ></WCAGG117H48>
    ),
}

export const UnorderedAnimals: StoryG117H48 = {
    render: () => (
        <WCAGG117H48
            listType="unordered"
            listItems={[
                {
                    itemName: 'Kitchen (new)',
                    new: true,
                },
                {
                    itemName: 'Bed and Bath (new)',
                    new: true,
                },
                {
                    itemName: 'Fine Dining',
                },
                {
                    itemName: 'Lighting',
                },
                {
                    itemName: 'Storage',
                },
            ]}
        ></WCAGG117H48>
    ),
}

export const Description: StoryG117H48 = {
    render: () => (
        <WCAGG117H48
            listType="description"
            listItems={[
                {
                    itemName: 'blink',
                },
                {
                    itemName:
                        'turn on and off between 0.5 and 3 times per second',
                },
            ]}
        ></WCAGG117H48>
    ),
}

export const DescriptionWithMapping: StoryG117H48 = {
    render: () => (
        <WCAGG117H48
            listType="description"
            listItems={[
                {
                    itemName: 'blink 1',
                },
                {
                    itemName:
                        'turn on and off between 0.25 and 2 times per second',
                },
                {
                    itemName: 'blink 2',
                },
                {
                    itemName:
                        'turn on and off between 0.5 and 4 times per second',
                },
                {
                    itemName: 'blink 3',
                },
                {
                    itemName:
                        'turn on and off between 0.75 and 6 times per second',
                },
            ]}
        ></WCAGG117H48>
    ),
}
