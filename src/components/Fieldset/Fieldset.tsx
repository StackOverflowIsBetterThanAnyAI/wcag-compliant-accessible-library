import { useId, type ComponentProps, type ReactNode } from 'react'

import { mergeIds } from '../../utils/mergeIds.js'

type PartProps = Omit<ComponentProps<'div'>, 'id' | 'children'>

export type FieldsetProps = ComponentProps<'fieldset'> & {
    /**
     * Names the group, e.g. "Shipping address" or the question of a radio group.
     * Keep it short: some screen readers repeat it for every control in the group.
     */
    legend: ReactNode
    /** Props for the `<legend>`, e.g. `className`. */
    legendProps?: Omit<ComponentProps<'legend'>, 'children'>
    /** Help text for the whole group, rendered after the legend and linked via `aria-describedby`. */
    description?: ReactNode
    /** Props for the description `<div>`, e.g. `className`. */
    descriptionProps?: PartProps
    /**
     * Error message for the whole group, e.g. "Choose a shipping method".
     * Rendered after the description and linked via `aria-describedby`.
     * While it is set, the fieldset has `data-invalid` for styling.
     */
    error?: ReactNode
    /** Props for the error `<div>`, e.g. `className`. */
    errorProps?: PartProps
}

/**
 * Groups related controls (radio buttons, checkboxes, address fields …) under a mandatory legend.
 *
 * Screen readers announce the legend, the description and the error when focus enters the group.
 * Use `error` for problems with the group as a whole, and `<Field invalid>` for single controls.
 *
 * Fulfils WCAG 1.3.1 Info and Relationships, 3.3.1 Error Identification and
 * 3.3.2 Labels or Instructions (techniques H71, ARIA1, ARIA21).
 */
export function Fieldset({
    legend,
    legendProps,
    description,
    descriptionProps,
    error,
    errorProps,
    children,
    'aria-describedby': describedBy,
    ...props
}: FieldsetProps) {
    const baseId = useId()
    const descriptionId = `${baseId}-description`
    const errorId = `${baseId}-error`
    const hasDescription = description != null && description !== false
    const hasError = error != null && error !== false

    return (
        <fieldset
            data-invalid={hasError || undefined}
            {...props}
            aria-describedby={mergeIds(
                hasDescription && descriptionId,
                hasError && errorId,
                describedBy
            )}
        >
            <legend {...legendProps}>{legend}</legend>
            {hasDescription && (
                <div {...descriptionProps} id={descriptionId}>
                    {description}
                </div>
            )}
            {hasError && (
                <div {...errorProps} id={errorId}>
                    {error}
                </div>
            )}
            {children}
        </fieldset>
    )
}
