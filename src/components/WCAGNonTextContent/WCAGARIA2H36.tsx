import React from 'react'
import { InputAttributes } from '../interfaces/InputAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'

interface WCAGARIA2H36Props {
    altText: string
    inputData: Omit<
        InputAttributes,
        | 'accept'
        | 'autocapitalize'
        | 'capture'
        | 'checked'
        | 'dirname'
        | 'max'
        | 'maxlength'
        | 'min'
        | 'minlength'
        | 'multiple'
        | 'pattern'
        | 'placeholder'
        | 'required'
        | 'size'
        | 'step'
        | 'type'
        | 'value'
    > & { required: boolean }
    role?:
        | 'button'
        | 'checkbox'
        | 'gridcell'
        | 'link'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'option'
        | 'radio'
        | 'separator'
        | 'slider'
        | 'switch'
        | 'tab'
        | 'treeitem'
    src: string
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
        | 'colcount'
        | 'colindextext'
        | 'colspan'
        | 'labelledby'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'multiselectable'
        | 'placeholder'
        | 'rowcount'
        | 'rowindex'
        | 'rowindextext'
        | 'rowspan'
        | 'sort'
    >
    onClickFunction?: () => void
    className?: string
}

const WCAGARIA2H36: React.FC<WCAGARIA2H36Props> = ({
    additionalAriaAttributes,
    altText,
    className,
    inputData,
    onClickFunction,
    role,
    src,
}) => {
    const errors: string[] = []

    if (altText.length < 1) {
        errors.push(
            'Your altText attribute hast to have a length of at least one character!'
        )
    }

    if (src.length < 1) {
        errors.push(
            'Your src attribute hast to have a length of at least one character!'
        )
    }

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

    return (
        <input
            alt={altText}
            type="image"
            src={src}
            role={role}
            className={className}
            onClick={() => onClickFunction && onClickFunction()}
            autoComplete={inputData?.autocomplete}
            autoFocus={inputData?.autofocus}
            disabled={inputData?.disabled}
            form={inputData?.form}
            formAction={inputData?.formaction}
            formMethod={inputData?.formmethod}
            formNoValidate={inputData?.formnovalidate}
            formTarget={inputData?.formtarget}
            id={inputData?.id}
            list={inputData?.list}
            name={inputData?.name}
            readOnly={inputData?.readonly}
            required={inputData.required}
            style={{
                height: inputData?.height,
                width: inputData?.width,
                ...inputData?.additionalStyling,
            }}
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-busy={additionalAriaAttributes?.busy}
            aria-checked={
                role === 'checkbox' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'switch'
                    ? additionalAriaAttributes?.checked
                    : undefined
            }
            aria-colindex={
                role === 'gridcell'
                    ? additionalAriaAttributes?.colindex
                    : undefined
            }
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-disabled={
                role === 'button' ||
                role === 'gridcell' ||
                role === 'link' ||
                role === 'menuitem' ||
                role === 'separator' ||
                role === 'tab' ||
                role === 'checkbox' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'slider' ||
                role === 'switch'
                    ? additionalAriaAttributes?.disabled
                    : undefined
            }
            aria-errormessage={
                role === 'checkbox' ||
                role === 'gridcell' ||
                role === 'slider' ||
                role === 'switch'
                    ? additionalAriaAttributes?.errormessage
                    : undefined
            }
            aria-expanded={
                role === 'button' ||
                role === 'checkbox' ||
                role === 'gridcell' ||
                role === 'link' ||
                role === 'menuitem' ||
                role === 'tab' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'switch'
                    ? additionalAriaAttributes?.expanded
                    : undefined
            }
            aria-flowto={additionalAriaAttributes?.flowto}
            aria-haspopup={
                role === 'button' ||
                role === 'gridcell' ||
                role === 'link' ||
                role === 'menuitem' ||
                role === 'slider' ||
                role === 'tab' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.haspopup
                    : undefined
            }
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-invalid={
                role === 'checkbox' ||
                role === 'gridcell' ||
                role === 'slider' ||
                role === 'switch'
                    ? additionalAriaAttributes?.invalid
                    : undefined
            }
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-label={additionalAriaAttributes?.label}
            aria-live={additionalAriaAttributes?.live}
            aria-orientation={
                role === 'separator' || role === 'slider'
                    ? additionalAriaAttributes?.orientation
                    : undefined
            }
            aria-owns={additionalAriaAttributes?.owns}
            aria-posinset={
                role === 'menuitem' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'tab' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.posinset
                    : undefined
            }
            aria-pressed={
                role === 'button'
                    ? additionalAriaAttributes?.pressed
                    : undefined
            }
            aria-readonly={
                role === 'checkbox' ||
                role === 'gridcell' ||
                role === 'slider' ||
                role === 'switch'
                    ? additionalAriaAttributes?.readonly
                    : undefined
            }
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-required={
                role === 'checkbox' || role === 'gridcell' || role === 'switch'
                    ? inputData.required
                    : undefined
            }
            aria-roledescription={additionalAriaAttributes?.roledescription}
            aria-selected={
                role === 'gridcell' || role === 'option' || role === 'tab'
                    ? additionalAriaAttributes?.selected
                    : undefined
            }
            aria-setsize={
                role === 'menuitem' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'tab' ||
                role == 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.setsize
                    : undefined
            }
            aria-valuemax={
                role === 'separator' || role === 'slider'
                    ? additionalAriaAttributes?.valuemax
                    : undefined
            }
            aria-valuemin={
                role === 'separator' || role === 'slider'
                    ? additionalAriaAttributes?.valuemin
                    : undefined
            }
            aria-valuenow={
                role === 'separator' || role === 'slider'
                    ? additionalAriaAttributes?.valuenow
                    : undefined
            }
            aria-valuetext={
                role === 'separator' || role === 'slider'
                    ? additionalAriaAttributes?.valuetext
                    : undefined
            }
        />
    )
}

export default WCAGARIA2H36
