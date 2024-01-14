import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA2H85 from './WCAGARIA2H85'

const metaARIA2H85: Meta<typeof WCAGARIA2H85> = {
    component: WCAGARIA2H85,
}

export default metaARIA2H85

type StoryARIA2H85 = StoryObj<typeof WCAGARIA2H85>

// WCAGNonTextComponentARIA2H85

export const Animals: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H85
            formData={{
                action: '/animals/',
                method: 'post',
            }}
            labelData={{
                for: 'animals',
                labelText: 'Pick your favourite animals:',
            }}
            selectData={{
                id: 'animals',
                seeMultiple: true,
                name: 'animals',
                size: 10,
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: 'Household Pets' }],
            ]}
            optionData={[
                [
                    { value: 'brontosaurus', text: 'Brontosaurus' },
                    { value: 'pterodactyl', text: 'Pterodactyl' },
                    { value: 'trex', text: 'T-Rex' },
                    { value: 'velociraptor', text: 'Velociraptor' },
                ],
                [
                    { value: 'camel', text: 'Camel' },
                    { value: 'giraffe', text: 'Giraffe' },
                    { value: 'hippo', text: 'Hippo' },
                    { value: 'horse', text: 'Horse' },
                    { value: 'zebra', text: 'Zebra' },
                ],
                [
                    { value: 'cat', text: 'Cat' },
                    { value: 'dog', text: 'Dog' },
                    { value: 'fish', text: 'Fish' },
                    { value: 'rabbit', text: 'Rabbit' },
                ],
            ]}
        />
    ),
}

export const Food: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H85
            formData={{ action: '/favorite-food/', method: 'post' }}
            labelData={{
                for: 'food',
                labelText: 'What is your favorite food?',
            }}
            selectData={{
                id: 'food',
                name: 'food',
            }}
            optionDataGroup={[
                [{ labelGroup: 'Fruits' }],
                [{ labelGroup: 'Vegetables' }],
                [{ labelGroup: 'Baked Goods' }],
            ]}
            optionData={[
                [
                    { value: '1', text: 'Apples' },
                    { value: '2', text: 'Bananas' },
                    { value: '3', text: 'Peaches' },
                ],
                [
                    { value: '4', text: 'Broccoli' },
                    { value: '5', text: 'Carrots' },
                    { value: '6', text: 'Cucmbers' },
                ],
                [
                    { value: '7', text: 'Apple Pie' },
                    { value: '8', text: 'Bagel' },
                    { value: '9', text: 'Chocolate Cake' },
                ],
            ]}
        />
    ),
}
