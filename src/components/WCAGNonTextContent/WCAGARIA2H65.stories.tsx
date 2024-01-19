import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA2H65 from './WCAGARIA2H65'
// @ts-ignore
import starImage from '../../images/star.png'

const metaARIA2H65: Meta<typeof WCAGARIA2H65> = {
    component: WCAGARIA2H65,
}

export default metaARIA2H65

type StoryARIA2H65 = StoryObj<typeof WCAGARIA2H65>

// WCAGNonTextComponentARIA2H65

export const TextInput: StoryARIA2H65 = {
    render: () => (
        <WCAGARIA2H65
            inputType="text"
            title="What is your surname?"
            inputData={{ required: false }}
        />
    ),
}

export const NumberInput: StoryARIA2H65 = {
    render: () => (
        <WCAGARIA2H65
            inputType="number"
            inputData={{
                required: false,
                placeholder: '0',
                min: '0',
                max: '9',
                value: '5',
            }}
            title="Enter any number from zero to nine."
        />
    ),
}

export const PasswordInput: StoryARIA2H65 = {
    render: () => (
        <form>
            <WCAGARIA2H65
                inputType="password"
                inputData={{
                    autocomplete: 'off',
                    required: false,
                    placeholder: 'password',
                }}
                title="Please enter your password."
                onClickFunction={() => console.log('click')}
            />
        </form>
    ),
}
