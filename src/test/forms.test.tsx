import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import {
    Field,
    FieldDescription,
    FieldError,
    FieldInput,
    FieldLabel,
    FieldSelect,
    FieldTextarea,
    Fieldset,
    useFieldControlProps,
    VisuallyHidden,
} from '../index.js'
import { axeViolations } from './axe.js'

describe('Field', () => {
    it('connects label, description and control', async () => {
        const { container } = render(
            <Field>
                <FieldLabel>Email</FieldLabel>
                <FieldInput type="email" autoComplete="email" />
                <FieldDescription>
                    We never share your address.
                </FieldDescription>
            </Field>
        )
        const input = screen.getByRole('textbox', { name: 'Email' })
        expect(input).toHaveAccessibleDescription(
            'We never share your address.'
        )
        expect(input).toHaveAttribute('autocomplete', 'email')
        expect(input).not.toHaveAttribute('aria-invalid')
        expect(await axeViolations(container)).toEqual([])
    })

    it('links the error only while the field is invalid', async () => {
        const { container, rerender } = render(
            <Field invalid required>
                <FieldLabel>Name</FieldLabel>
                <FieldInput />
                <FieldDescription>As on your ID.</FieldDescription>
                <FieldError>Please enter your name.</FieldError>
            </Field>
        )
        const input = screen.getByRole('textbox', { name: 'Name' })
        expect(input).toBeInvalid()
        expect(input).toBeRequired()
        expect(input).toHaveAccessibleDescription(
            'As on your ID. Please enter your name.'
        )
        expect(await axeViolations(container)).toEqual([])

        rerender(
            <Field required>
                <FieldLabel>Name</FieldLabel>
                <FieldInput />
                <FieldDescription>As on your ID.</FieldDescription>
            </Field>
        )
        expect(input).not.toHaveAttribute('aria-invalid')
        expect(input).toHaveAccessibleDescription('As on your ID.')
    })

    it('uses controlId for the control and its label', () => {
        render(
            <Field controlId="email">
                <FieldLabel>Email</FieldLabel>
                <FieldInput type="email" />
            </Field>
        )
        expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute(
            'id',
            'email'
        )
    })

    it('warns when an error is shown but the field is not invalid', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(
            <Field>
                <FieldLabel>Name</FieldLabel>
                <FieldInput />
                <FieldError>Please enter your name.</FieldError>
            </Field>
        )
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('is not `invalid`')
        )
        warn.mockRestore()
    })

    it('exposes state as data attributes on every part for styling', () => {
        const { container } = render(
            <Field invalid disabled data-testid="root">
                <FieldLabel>Age</FieldLabel>
                <FieldInput />
                <FieldError>Too young</FieldError>
            </Field>
        )
        for (const part of container.querySelectorAll('div, label, input')) {
            expect(part).toHaveAttribute('data-invalid', 'true')
            expect(part).toHaveAttribute('data-disabled', 'true')
        }
        expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('works with select, textarea, visually hidden labels and user aria-describedby', () => {
        render(
            <>
                <p id="hint">Extra hint</p>
                <Field>
                    <VisuallyHidden>
                        <FieldLabel>Country</FieldLabel>
                    </VisuallyHidden>
                    <FieldSelect aria-describedby="hint">
                        <optgroup label="Europe">
                            <option>Austria</option>
                        </optgroup>
                    </FieldSelect>
                    <FieldDescription>Where you live</FieldDescription>
                </Field>
                <Field>
                    <FieldLabel>Message</FieldLabel>
                    <FieldTextarea />
                </Field>
            </>
        )
        expect(
            screen.getByRole('combobox', { name: 'Country' })
        ).toHaveAccessibleDescription('Where you live Extra hint')
        expect(
            screen.getByRole('textbox', { name: 'Message' })
        ).toBeInTheDocument()
    })

    it('supports custom controls through useFieldControlProps', () => {
        function CustomInput(props: React.ComponentProps<'input'>) {
            return <input {...useFieldControlProps(props)} className="fancy" />
        }
        render(
            <Field invalid>
                <FieldLabel>Code</FieldLabel>
                <CustomInput />
            </Field>
        )
        expect(screen.getByRole('textbox', { name: 'Code' })).toBeInvalid()
    })

    it('warns when a control has no label', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(
            <Field>
                <FieldInput />
            </Field>
        )
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('has no label')
        )
    })
})

describe('Fieldset', () => {
    it('names a group of controls with its legend', async () => {
        const { container } = render(
            <Fieldset legend="Preferred contact">
                <Field>
                    <FieldInput type="radio" name="contact" value="mail" />
                    <FieldLabel>Email</FieldLabel>
                </Field>
                <Field>
                    <FieldInput type="radio" name="contact" value="phone" />
                    <FieldLabel>Phone</FieldLabel>
                </Field>
            </Fieldset>
        )
        expect(
            screen.getByRole('group', { name: 'Preferred contact' })
        ).toBeInTheDocument()
        expect(screen.getByRole('radio', { name: 'Phone' })).toBeInTheDocument()
        expect(await axeViolations(container)).toEqual([])
    })

    it('links description and error to the group', async () => {
        const { container, rerender } = render(
            <Fieldset
                legend="Shipping method"
                description="Express costs extra."
                error="Choose a shipping method."
                aria-describedby="note"
            >
                <Field>
                    <FieldInput type="radio" name="ship" value="standard" />
                    <FieldLabel>Standard</FieldLabel>
                </Field>
            </Fieldset>
        )
        const group = screen.getByRole('group', { name: 'Shipping method' })
        expect(group).toHaveAttribute('data-invalid')
        expect(group.getAttribute('aria-describedby')?.split(' ')).toHaveLength(
            3
        )
        expect(await axeViolations(container)).toEqual([])

        rerender(
            <Fieldset
                legend="Shipping method"
                description="Express costs extra."
            >
                <Field>
                    <FieldInput type="radio" name="ship" value="standard" />
                    <FieldLabel>Standard</FieldLabel>
                </Field>
            </Fieldset>
        )
        expect(group).not.toHaveAttribute('data-invalid')
        expect(group).toHaveAccessibleDescription('Express costs extra.')
    })
})
