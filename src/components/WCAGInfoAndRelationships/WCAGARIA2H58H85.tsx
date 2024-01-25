import React, { CSSProperties, ReactNode } from 'react'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'
import { FormAttributes } from '../interfaces/FormAttributes'
import { SelectAttributes } from '../interfaces/SelectAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGARIA2H58H85Props {
    formData: FormAttributes
    labelData: {
        labelText: ReactNode
        className?: string
        form?: string
        additionalStylingLabel?: CSSProperties
    }
    selectData: SelectAttributes
    optionDataGroup: {
        labelGroup: string
        className?: string
        disabledGroup?: boolean
    }[][]
    optionData: {
        text: string
        value: string
        className?: string
        disabled?: boolean
        label?: string
        lang?: LangAttributes
        selected?: boolean
        additionalStyling?: CSSProperties
    }[][]
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
        | 'checked'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'disabled'
        | 'errormessage'
        | 'expanded'
        | 'haspopup'
        | 'invalid'
        | 'labelledby'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'multiselectable'
        | 'orientation'
        | 'placeholder'
        | 'posinset'
        | 'pressed'
        | 'readonly'
        | 'required'
        | 'rowcount'
        | 'rowindex'
        | 'rowindextext'
        | 'rowspan'
        | 'selected'
        | 'setsize'
        | 'sort'
        | 'valuemax'
        | 'valuemin'
        | 'valuenow'
        | 'valuetext'
    >
    role?: 'presentation' | 'search'
}

const WCAGARIA2H58H85: React.FC<WCAGARIA2H58H85Props> = ({
    additionalAriaAttributes,
    formData,
    labelData,
    optionData,
    optionDataGroup,
    role,
    selectData,
}) => {
    const renderOptionGroups = () => {
        return optionDataGroup.map((group, index) => {
            const label = group[0]?.labelGroup || ''
            const options = optionData[index]?.map((option) => (
                <option
                    key={option.value}
                    className={option?.className}
                    value={option.value}
                    disabled={option?.disabled}
                    label={option?.label}
                    lang={option?.lang?.language}
                    selected={option?.selected}
                    style={{ ...option?.additionalStyling }}
                >
                    {option.text}
                </option>
            ))

            return (
                <optgroup key={label} label={label}>
                    {options}
                </optgroup>
            )
        })
    }
    return (
        <form
            role={role}
            className={formData?.classNameForm}
            acceptCharset={formData?.acceptCharset}
            action={formData?.action}
            autoComplete={formData?.autocomplete}
            encType={formData?.enctype}
            method={formData.method}
            name={formData?.name}
            noValidate={formData?.novalidate}
            rel={formData?.rel}
            target={formData?.target}
            style={{ ...formData?.additionalStylingForm }}
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-busy={additionalAriaAttributes?.busy}
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-flowto={additionalAriaAttributes?.flowto}
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-label={additionalAriaAttributes?.label}
            aria-live={additionalAriaAttributes?.live}
            aria-owns={additionalAriaAttributes?.owns}
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-roledescription={additionalAriaAttributes?.roledescription}
        >
            <label
                htmlFor={selectData.id}
                form={labelData?.form}
                className={labelData?.className}
                style={{ ...labelData?.additionalStylingLabel }}
            >
                {labelData.labelText}
            </label>
            <select
                aria-required={selectData?.required}
                id={selectData.id}
                autoFocus={selectData?.autofocus}
                className={selectData?.className}
                disabled={selectData?.disabled}
                form={selectData?.form}
                multiple={selectData?.seeMultiple}
                name={selectData.name}
                required={selectData?.required}
                size={selectData?.size}
                style={{ ...selectData?.additionalStyling }}
            >
                {renderOptionGroups()}
            </select>
        </form>
    )
}

export default WCAGARIA2H58H85
