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
            id="firstname"
            name="firstname"
            inputType="text"
            labelText="First name:"
        />
    ),
}

export const Checkbox: StoryH44 = {
    render: () => (
        <WCAGH44
            id="markuplang"
            name="computerskills"
            inputType="checkbox"
            labelText="HTML"
        />
    ),
}

export const Group: StoryH44 = {
    render: () => (
        <form>
            <fieldset>
                <legend>Pick the doughnut you would like</legend>
                <WCAGH44
                    id="dn-choc"
                    name="flavor"
                    inputType="radio"
                    labelText="Chocolate"
                    value="chocolate"
                />
                <WCAGH44
                    id="dn-cream"
                    name="flavor"
                    inputType="radio"
                    labelText="Cream"
                    value="cream"
                />
                <WCAGH44
                    id="dn-raspberry"
                    name="flavor"
                    inputType="radio"
                    labelText="Raspberry"
                    value="raspberry"
                />
            </fieldset>
        </form>
    ),
}

export const Select: StoryH44 = {
    render: () => (
        <WCAGH44
            id="car"
            name="car"
            inputType="select"
            labelText="Choose a car:"
            selectoptions={
                <>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </>
            }
        />
    ),
}
