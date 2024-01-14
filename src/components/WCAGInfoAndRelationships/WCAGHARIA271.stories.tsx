import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA2H71 from './WCAGARIA2H71'

const metaARIA2H71: Meta<typeof WCAGARIA2H71> = {
    component: WCAGARIA2H71,
}

export default metaARIA2H71

type StoryARIA2H71 = StoryObj<typeof WCAGARIA2H71>

// WCAGNonTextComponentARIA2H71

export const Checkbox: StoryARIA2H71 = {
    render: () => (
        <WCAGARIA2H71
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

export const Radio: StoryARIA2H71 = {
    render: () => (
        <WCAGARIA2H71
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
