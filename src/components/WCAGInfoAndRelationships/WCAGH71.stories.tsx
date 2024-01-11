import type { Meta, StoryObj } from '@storybook/react'

import WCAGH71 from './WCAGH71'

const metaH71: Meta<typeof WCAGH71> = {
    component: WCAGH71,
}

export default metaH71

type StoryH71 = StoryObj<typeof WCAGH71>

// WCAGNonTextComponentH71

export const Checkbox: StoryH71 = {
    render: () => (
        <WCAGH71
            legendData={{
                legendText:
                    'I am interested in the following (check all that apply):',
            }}
            inputLabelData={[
                {
                    id: 'photo',
                    labelText: 'Photograph',
                    inputType: 'checkbox',
                    inputName: 'interests',
                    inputValue: 'ph',
                },
                {
                    id: 'watercol',
                    labelText: 'Watercolor',
                    inputType: 'checkbox',
                    inputName: 'interests',
                    inputValue: 'wa',
                    inputChecked: true,
                },
                {
                    id: 'acrylic',
                    labelText: 'Acrylic',
                    inputType: 'checkbox',
                    inputName: 'interests',
                    inputValue: 'ac',
                    inputChecked: true,
                },
            ]}
            onClickFunction={() => console.log('click')}
        />
    ),
}

export const Radio: StoryH71 = {
    render: () => (
        <WCAGH71
            legendData={{
                legendText: 'The play Hamlet was written by:',
            }}
            inputLabelData={[
                {
                    id: 'shakesp',
                    labelText: 'William Shakespeare',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'a',
                    inputChecked: true,
                },
                {
                    id: 'austen',
                    labelText: 'Jane Austen',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'b',
                },
                {
                    id: 'gbshaw',
                    labelText: 'George Bernard Shaw',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'c',
                },
                {
                    id: 'woolf',
                    labelText: 'Virginia Woolf',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'd',
                },
                {
                    id: 'dickens',
                    labelText: 'Charles Dickens',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'e',
                },
            ]}
            formData={{ action: '/adduser', method: 'post' }}
            onClickFunction={() => console.log('click')}
        />
    ),
}
