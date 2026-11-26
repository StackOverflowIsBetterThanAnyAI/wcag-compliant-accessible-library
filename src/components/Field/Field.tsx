'use client'

import {
    createContext,
    use,
    useEffect,
    useId,
    type AriaAttributes,
    type ComponentProps,
} from 'react'

import { warnA11y } from '../../utils/dev.js'
import { mergeIds } from '../../utils/mergeIds.js'
import { useRegisterSlot, useSlotRegistry } from '../../utils/useSlot.js'

type FieldState = {
    invalid: boolean
    required: boolean
    disabled: boolean
}

type FieldContextValue = FieldState & {
    controlId: string
    descriptionId: string
    errorId: string
    hasDescription: boolean
    hasError: boolean
    registerDescription: () => () => void
    registerError: () => () => void
}

const FieldContext = createContext<FieldContextValue | null>(null)

/** `data-*` attributes that mirror the field state, so you can style every part with CSS selectors. */
function stateAttributes(state: FieldState | null) {
    return {
        'data-invalid': state?.invalid || undefined,
        'data-required': state?.required || undefined,
        'data-disabled': state?.disabled || undefined,
    }
}

export type FieldProps = ComponentProps<'div'> & {
    /** Marks the control as invalid and links `<FieldError>` to it. */
    invalid?: boolean
    /** Marks the control as required (native `required`). */
    required?: boolean
    /** Disables the control (native `disabled`). */
    disabled?: boolean
    /**
     * `id` of the control, e.g. to link to it from an error summary.
     * Generated automatically if omitted. Set it here, not on the control, so the label stays connected.
     */
    controlId?: string
}

/**
 * Wires a form control to its label, description and error message.
 * All IDs are generated and connected for you; each part renders a plain native element.
 *
 * Every part exposes `data-invalid`, `data-required` and `data-disabled` for styling.
 *
 * Fulfils WCAG 1.3.1 Info and Relationships, 3.3.1 Error Identification, 3.3.2 Labels or Instructions
 * and 4.1.2 Name, Role, Value (techniques H44, ARIA1, ARIA21). Use native `autoComplete` on
 * `<FieldInput>` for 1.3.5 Identify Input Purpose (H98).
 *
 * ```tsx
 * <Field invalid={!!error} required>
 *     <FieldLabel>Email</FieldLabel>
 *     <FieldInput type="email" autoComplete="email" />
 *     <FieldDescription>We never share your address.</FieldDescription>
 *     {error && <FieldError>{error}</FieldError>}
 * </Field>
 * ```
 */
export function Field({
    invalid = false,
    required = false,
    disabled = false,
    controlId,
    ...props
}: FieldProps) {
    const baseId = useId()
    const [hasDescription, registerDescription] = useSlotRegistry()
    const [hasError, registerError] = useSlotRegistry()

    const value: FieldContextValue = {
        invalid,
        required,
        disabled,
        controlId: controlId ?? `${baseId}-control`,
        descriptionId: `${baseId}-description`,
        errorId: `${baseId}-error`,
        hasDescription,
        hasError,
        registerDescription,
        registerError,
    }

    return (
        <FieldContext value={value}>
            <div {...stateAttributes(value)} {...props} />
        </FieldContext>
    )
}

type ControlProps = {
    id?: string | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
} & Pick<
    AriaAttributes,
    'aria-describedby' | 'aria-invalid' | 'aria-label' | 'aria-labelledby'
>

/**
 * Returns the props that connect a control to its surrounding `<Field>`.
 * Use it to build your own controls (e.g. a styled checkbox or a third-party input).
 *
 * ```tsx
 * function MyInput(props) {
 *     return <input {...useFieldControlProps(props)} className="my-input" />
 * }
 * ```
 */
export function useFieldControlProps<P extends ControlProps>(props: P): P {
    const field = use(FieldContext)
    const id = props.id ?? field?.controlId
    const invalid =
        field?.invalid ||
        props['aria-invalid'] === true ||
        props['aria-invalid'] === 'true'

    const hasExplicitName =
        props['aria-label'] != null || props['aria-labelledby'] != null
    useEffect(() => {
        if (!id || hasExplicitName) return
        const element = document.getElementById(id)
        if (
            element &&
            'labels' in element &&
            (element.labels as NodeList | null)?.length === 0
        ) {
            warnA11y(
                'Field',
                `The control "#${id}" has no label. Add a <FieldLabel> (it can be visually hidden) or an aria-label.`
            )
        }
    }, [id, hasExplicitName])

    return {
        ...stateAttributes(field),
        ...props,
        id,
        required: props.required ?? field?.required,
        disabled: props.disabled ?? field?.disabled,
        'aria-invalid': invalid || undefined,
        'aria-describedby': mergeIds(
            field?.hasDescription && field.descriptionId,
            field?.hasError && invalid && field.errorId,
            props['aria-describedby']
        ),
    }
}

export type FieldLabelProps = Omit<ComponentProps<'label'>, 'htmlFor'>

/** The visible label of the control. Wrap it in `<VisuallyHidden>` if it must not be visible. */
export function FieldLabel(props: FieldLabelProps) {
    const field = use(FieldContext)
    return (
        <label
            {...stateAttributes(field)}
            {...props}
            htmlFor={field?.controlId}
        />
    )
}

// The `id` comes from `<Field controlId>`, so the label always points at the control.
type WithoutId<P> = Omit<P, 'id'>

export type FieldInputProps = WithoutId<ComponentProps<'input'>>

/** A native `<input>` connected to its `<Field>`. */
export function FieldInput(props: FieldInputProps) {
    return <input {...useFieldControlProps(props)} />
}

export type FieldTextareaProps = WithoutId<ComponentProps<'textarea'>>

/** A native `<textarea>` connected to its `<Field>`. */
export function FieldTextarea(props: FieldTextareaProps) {
    return <textarea {...useFieldControlProps(props)} />
}

export type FieldSelectProps = WithoutId<ComponentProps<'select'>>

/** A native `<select>` connected to its `<Field>`. Group options with `<optgroup label>` (technique H85). */
export function FieldSelect(props: FieldSelectProps) {
    return <select {...useFieldControlProps(props)} />
}

export type FieldDescriptionProps = Omit<ComponentProps<'div'>, 'id'>

/** Help text or instructions for the control, announced together with it. */
export function FieldDescription(props: FieldDescriptionProps) {
    const field = use(FieldContext)
    useRegisterSlot(field?.registerDescription)
    return (
        <div {...stateAttributes(field)} {...props} id={field?.descriptionId} />
    )
}

export type FieldErrorProps = Omit<ComponentProps<'div'>, 'id'>

/**
 * The error message for the control. It is linked to the control while the `<Field>` is `invalid`,
 * so render it together with `invalid`.
 *
 * It is not a live region: announcing errors on every keystroke is disruptive. Check the form on
 * submit and move focus to the first invalid control instead.
 */
export function FieldError(props: FieldErrorProps) {
    const field = use(FieldContext)
    if (field && !field.invalid) {
        warnA11y(
            'FieldError',
            'is rendered, but its <Field> is not `invalid`, so screen readers do not announce it. Set `invalid` on the <Field>, or render the error only while it is invalid.'
        )
    }
    useRegisterSlot(field?.registerError)
    return <div {...stateAttributes(field)} {...props} id={field?.errorId} />
}
