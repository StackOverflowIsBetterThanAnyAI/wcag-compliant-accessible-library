import type { Meta, StoryObj } from '@storybook/react'

import WCAGH44 from './WCAGH44'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH44: Meta<typeof WCAGH44> = {
    component: WCAGH44,
}

export default metaH44

type StoryH44 = StoryObj<typeof WCAGH44>

// WCAGNonTextComponentH44

export const Text: StoryH44 = {
    render: () => (
        <WCAGH44
            inputData={[
                {
                    name: 'firstname',
                    id: 'firstname',
                    labelText: 'First name:',
                },
            ]}
            inputType="text"
        />
    ),
}

export const TextArea: StoryH44 = {
    render: () => (
        <WCAGH44
            inputData={[
                {
                    name: 'firstname',
                    id: 'firstname',
                    labelText: 'First name:',
                },
            ]}
            inputType="textarea"
        />
    ),
}

export const Checkbox: StoryH44 = {
    render: () => (
        <WCAGH44
            inputData={[
                {
                    name: 'computerskills',
                    id: 'markuplang',
                    labelText: 'HTML',
                },
                {
                    name: 'css',
                    id: 'markuplang',
                    labelText: 'CSS',
                },
            ]}
            inputType="checkbox"
        />
    ),
}

export const Group: StoryH44 = {
    render: () => (
        <form>
            <fieldset>
                <legend>Pick the doughnut you would like</legend>
                <WCAGH44
                    inputData={[
                        {
                            name: 'flavor',
                            id: 'dn-choc',
                            labelText: 'Chocolate',
                            value: 'chocolate',
                        },
                        {
                            name: 'flavor',
                            id: 'dn-cream',
                            labelText: 'Cream Filled',
                            value: 'cream',
                        },
                        {
                            name: 'flavor',
                            id: 'dn-rasp',
                            labelText: 'Raspberry Filled',
                            value: 'raspberry',
                        },
                    ]}
                    inputType="radio"
                    onClickFunction={() => console.log('click')}
                />
            </fieldset>
            <input type="submit" value="Purchase Your Doughnut" />
        </form>
    ),
}

export const Select: StoryH44 = {
    render: () => (
        <WCAGH44
            inputData={[
                {
                    id: 'car',
                    name: 'car',
                    labelText: 'Choose a car:',
                    selectoptions: (
                        <>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </>
                    ),
                },
            ]}
            inputType="select"
        />
    ),
}
