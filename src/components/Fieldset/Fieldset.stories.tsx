import type { Meta, StoryObj } from '@storybook/react-vite'

import { Field, FieldInput, FieldLabel } from '../Field/Field.js'
import { Fieldset } from './Fieldset.js'

const meta = {
    title: 'Forms/Fieldset',
    component: Fieldset,
    args: { className: 'demo-fieldset' },
} satisfies Meta<typeof Fieldset>

export default meta
type Story = StoryObj<typeof meta>

/** The legend names the radio group, so each option is announced with its question. */
export const RadioGroup: Story = {
    args: {
        legend: 'How should we contact you?',
        children: (
            <>
                {['Email', 'Phone', 'Letter'].map((option) => (
                    <Field key={option}>
                        <FieldInput
                            type="radio"
                            name="contact"
                            value={option}
                        />{' '}
                        <FieldLabel>{option}</FieldLabel>
                    </Field>
                ))}
            </>
        ),
    },
}

/**
 * `description` and `error` belong to the group as a whole. Both are announced when focus
 * enters the group; the error also sets `data-invalid` on the fieldset for styling.
 */
export const WithError: Story = {
    args: {
        legend: 'Shipping method',
        description: 'Express delivery costs €9.90.',
        descriptionProps: { className: 'demo-description' },
        error: 'Choose a shipping method.',
        errorProps: { className: 'demo-error' },
        children: (
            <>
                {['Standard', 'Express'].map((option) => (
                    <Field key={option}>
                        <FieldInput
                            type="radio"
                            name="shipping"
                            value={option}
                        />{' '}
                        <FieldLabel>{option}</FieldLabel>
                    </Field>
                ))}
            </>
        ),
    },
}

/** Related inputs such as an address share one group name. */
export const AddressGroup: Story = {
    args: {
        legend: 'Shipping address',
        children: (
            <>
                <Field className="demo-field">
                    <FieldLabel>Street</FieldLabel>
                    <FieldInput autoComplete="shipping street-address" />
                </Field>
                <Field className="demo-field">
                    <FieldLabel>Postal code</FieldLabel>
                    <FieldInput autoComplete="shipping postal-code" />
                </Field>
            </>
        ),
    },
}
