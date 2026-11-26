import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ComponentProps } from 'react'

import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.js'
import {
    Field,
    FieldDescription,
    FieldError,
    FieldInput,
    FieldLabel,
    FieldSelect,
    FieldTextarea,
    useFieldControlProps,
} from './Field.js'

const meta = {
    title: 'Forms/Field',
    component: Field,
    subcomponents: {
        FieldLabel,
        FieldInput,
        FieldSelect,
        FieldTextarea,
        FieldDescription,
        FieldError,
    },
    args: { className: 'demo-field' },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

/** Label, help text and input with `autoComplete`, so browsers can fill it in (1.3.5). */
export const Default: Story = {
    render: (args) => (
        <Field {...args}>
            <FieldLabel>Email</FieldLabel>
            <FieldInput type="email" autoComplete="email" />
            <FieldDescription className="demo-description">
                We only use it to send your receipt.
            </FieldDescription>
        </Field>
    ),
}

/**
 * Type less than 3 characters and leave the field. The error is linked to the input while the
 * field is invalid; styling reacts to `data-invalid` and `data-required`.
 */
export const WithValidation: Story = {
    render: function Render(args) {
        const [value, setValue] = useState('')
        const [touched, setTouched] = useState(false)
        const invalid = touched && value.trim().length < 3
        return (
            <Field {...args} required invalid={invalid}>
                <FieldLabel>Full name</FieldLabel>
                <FieldInput
                    autoComplete="name"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onBlur={() => setTouched(true)}
                />
                <FieldDescription className="demo-description">
                    As on your ID.
                </FieldDescription>
                {invalid && (
                    <FieldError className="demo-error">
                        Please enter at least 3 characters.
                    </FieldError>
                )}
            </Field>
        )
    },
}

/** Grouped options with `<optgroup>` (H85). */
export const Select: Story = {
    render: (args) => (
        <Field {...args}>
            <FieldLabel>Country</FieldLabel>
            <FieldSelect autoComplete="country-name" defaultValue="">
                <option value="" disabled>
                    Choose a country
                </option>
                <optgroup label="Europe">
                    <option>Austria</option>
                    <option>Germany</option>
                </optgroup>
                <optgroup label="Americas">
                    <option>Canada</option>
                    <option>Mexico</option>
                </optgroup>
            </FieldSelect>
        </Field>
    ),
}

export const Textarea: Story = {
    render: (args) => (
        <Field {...args}>
            <FieldLabel>Message</FieldLabel>
            <FieldTextarea rows={4} />
        </Field>
    ),
}

/** When the design has no visible label, keep it for screen readers. */
export const VisuallyHiddenLabel: Story = {
    render: (args) => (
        <Field {...args}>
            <VisuallyHidden>
                <FieldLabel>Search</FieldLabel>
            </VisuallyHidden>
            <FieldInput type="search" placeholder="Search…" />
        </Field>
    ),
}

function FancyInput(props: ComponentProps<'input'>) {
    return (
        <input
            {...useFieldControlProps(props)}
            style={{ borderStyle: 'dashed', borderWidth: 2, padding: '0.5rem' }}
        />
    )
}

/** Any control, including third-party ones, can join a field via `useFieldControlProps`. */
export const CustomControl: Story = {
    render: (args) => (
        <Field {...args} invalid>
            <FieldLabel>Voucher code</FieldLabel>
            <FancyInput />
            <FieldError className="demo-error">
                This code has expired.
            </FieldError>
        </Field>
    ),
}
