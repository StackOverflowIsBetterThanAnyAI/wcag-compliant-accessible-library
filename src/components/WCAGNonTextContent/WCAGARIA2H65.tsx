import React from 'react'
import { InputAttributes } from '../interfaces/InputAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'

interface WCAGARIA2H65Props {
    inputType:
        | 'button'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week'
    title: string
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'braillelabel'
        | 'brailleroledescription'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'level'
        | 'modal'
        | 'multiselectable'
        | 'orientation'
        | 'pressed'
        | 'rowcount'
        | 'rowindex'
        | 'rowindextext'
        | 'rowspan'
        | 'sort'
    >
    inputData: Omit<InputAttributes, 'type' | 'required'> & {
        altText?: string
    } & {
        src?: string
    } & { required: boolean }
    role?:
        | 'checkbox'
        | 'combobox'
        | 'link'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'option'
        | 'radio'
        | 'searchbox'
        | 'spinbutton'
        | 'switch'
        | 'tab'
    className?: string
    onClickFunction?: () => void
}

const WCAGARIA2H65: React.FC<WCAGARIA2H65Props> = ({
    additionalAriaAttributes,
    className,
    inputData,
    inputType,
    onClickFunction,
    role,
    title,
}) => {
    return (
        <input
            role={
                inputType === 'button' ||
                inputType === 'image' ||
                inputType === 'text'
                    ? role
                    : undefined
            }
            aria-required={
                (role === 'checkbox' ||
                    role === 'combobox' ||
                    role === 'spinbutton' ||
                    role === 'searchbox' ||
                    role === 'switch') &&
                inputData.required
            }
            onClick={() => onClickFunction && onClickFunction()}
            accept={inputData?.accept}
            alt={inputData?.altText}
            autoCapitalize={inputData?.autocapitalize}
            autoComplete={inputData?.autocomplete}
            autoFocus={inputData?.autofocus}
            capture={inputData?.capture}
            className={className}
            dir={inputData?.dirname}
            disabled={inputData?.disabled}
            form={inputData?.form}
            formAction={inputData?.formaction}
            formEncType={inputData?.formenctype}
            formMethod={inputData?.formmethod}
            formNoValidate={inputData?.formnovalidate}
            formTarget={inputData?.formtarget}
            id={inputData?.id}
            type={inputType}
            list={inputData?.list}
            max={inputData?.max}
            maxLength={inputData?.maxlength}
            min={inputData?.min}
            minLength={inputData?.minlength}
            multiple={inputData?.multiple}
            name={inputData?.name}
            pattern={inputData?.pattern}
            placeholder={inputData?.placeholder}
            readOnly={inputData?.readonly}
            required={inputData.required}
            size={inputData?.size}
            src={inputData?.src}
            step={inputData?.step}
            title={title}
            value={inputData?.value}
            style={{
                height: inputData?.height,
                width: inputData?.width,
                ...inputData?.additionalStyling,
            }}
            aria-activedescendant={
                role === 'combobox'
                    ? additionalAriaAttributes?.activedescendant
                    : undefined
            }
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-autocomplete={
                role === 'combobox' || role === 'searchbox'
                    ? additionalAriaAttributes?.autocomplete
                    : undefined
            }
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
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-disabled={
                role === 'link' ||
                role === 'menuitem' ||
                role === 'tab' ||
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'searchbox' ||
                role === 'spinbutton' ||
                role === 'switch' ||
                role === 'tablist' ||
                role === 'textbox' ||
                role === 'toolbar' ||
                role === 'treegrid'
                    ? additionalAriaAttributes?.disabled
                    : undefined
            }
            aria-errormessage={
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'spinbutton' ||
                role === 'searchbox' ||
                role === 'switch'
                    ? additionalAriaAttributes?.errormessage
                    : undefined
            }
            aria-expanded={
                role === 'checkbox' ||
                role === 'combobox' ||
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
                role === 'combobox' ||
                role === 'link' ||
                role === 'menuitem' ||
                role === 'tab' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'searchbox'
                    ? additionalAriaAttributes?.haspopup
                    : undefined
            }
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-invalid={
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'spinbutton' ||
                role === 'searchbox' ||
                role === 'switch'
                    ? additionalAriaAttributes?.invalid
                    : undefined
            }
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-label={additionalAriaAttributes?.label}
            aria-labelledby={additionalAriaAttributes?.labelledby}
            aria-live={additionalAriaAttributes?.live}
            aria-multiline={
                role === 'searchbox'
                    ? additionalAriaAttributes?.multiline
                    : undefined
            }
            aria-owns={additionalAriaAttributes?.owns}
            aria-placeholder={
                role === 'searchbox'
                    ? additionalAriaAttributes?.placeholder
                    : undefined
            }
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
            aria-readonly={
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'spinbutton' ||
                role === 'searchbox' ||
                role === 'switch'
                    ? additionalAriaAttributes?.readonly
                    : undefined
            }
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-roledescription={additionalAriaAttributes?.roledescription}
            aria-selected={
                role === 'option' || role === 'tab'
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
                role === 'spinbutton'
                    ? additionalAriaAttributes?.valuemax
                    : undefined
            }
            aria-valuemin={
                role === 'spinbutton'
                    ? additionalAriaAttributes?.valuemin
                    : undefined
            }
            aria-valuenow={
                role === 'spinbutton'
                    ? additionalAriaAttributes?.valuenow
                    : undefined
            }
            aria-valuetext={
                role === 'spinbutton'
                    ? additionalAriaAttributes?.valuetext
                    : undefined
            }
        />
    )
}

export default WCAGARIA2H65
