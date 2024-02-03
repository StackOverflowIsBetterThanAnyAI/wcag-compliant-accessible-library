import React, { CSSProperties, useState } from 'react'
import { WAIARIAAttributes } from '../../../interfaces/WAIARIAAttributes'
import { FormAttributes } from '../../../interfaces/FormAttributes'
import { LangAttributes } from '../../../interfaces/LangAttributes'

interface WCAGARIA2H58H71Props {
    inputLabelData: {
        id: string
        inputType: 'checkbox' | 'radio'
        labelText: string
        inputAutocomplete?: 'on' | 'off'
        inputAutofocus?: boolean
        inputChecked?: boolean
        inputDirname?: string
        inputDisabled?: boolean
        inputForm?: string
        inputFormnovalidate?: boolean
        inputList?: string
        inputMax?: number
        inputMaxlength?: number
        inputMin?: number
        inputMinlength?: number
        inputMultiple?: boolean
        inputName?: string
        inputPattern?: string
        inputPlaceholder?: string
        inputReadonly?: boolean
        inputRequired?: boolean
        inputSize?: number
        inputStep?: number
        inputValue?: string
        labelForm?: string
        lang?: LangAttributes
        classNameInput?: string
        classNameLabel?: string
        additionalStylingInput?: CSSProperties
        additionalStylingLabel?: CSSProperties
    }[]
    legendData: {
        legendText: string
        additionalStylingLegend?: CSSProperties
        classNameLegend?: string
    }
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
        | 'expanded'
        | 'haspopup'
        | 'labelledby'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'multiselectable'
        | 'placeholder'
        | 'posinset'
        | 'pressed'
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
    fieldsetData?: {
        disabled?: boolean
        form?: string
        name?: string
        classNameFieldset?: string
        additionalStylingFieldset?: CSSProperties
    }
    formData?: FormAttributes
    onClickFunction?: () => void
    onFocusFunction?: () => void
    onHoverFunction?: () => void
    role?: 'presentation' | 'radiogroup'
}

const WCAGARIA2H58H71: React.FC<WCAGARIA2H58H71Props> = ({
    additionalAriaAttributes,
    fieldsetData,
    formData,
    inputLabelData,
    legendData,
    onClickFunction,
    onFocusFunction,
    onHoverFunction,
    role,
}) => {
    const [checkedStates, setCheckedStates] = useState(
        inputLabelData.map((data) => data?.inputChecked ?? false)
    )

    const handleChange = (itemIndex: number, type: 'checkbox' | 'radio') => {
        if (type === 'radio') {
            const newCheckedStates = checkedStates.map(
                (_, i) => i === itemIndex
            )
            setCheckedStates(newCheckedStates)
        } else {
            const newCheckedStates = [...checkedStates]
            newCheckedStates[itemIndex] = !newCheckedStates[itemIndex]
            setCheckedStates(newCheckedStates)
        }
        onClickFunction && onClickFunction()
    }

    const errors: string[] = []

    inputLabelData.forEach((data, dataIndex) => {
        if (data.id.trim().length < 1) {
            errors.push(
                `Your id attribute in imageData[${dataIndex}] has to have a length of at least one character!`
            )
        }
    })

    inputLabelData.forEach((data, dataIndex) => {
        if (data.labelText.trim().length < 1) {
            errors.push(
                `Your labelText attribute in imageData[${dataIndex}] has to have a length of at least one character!`
            )
        }
    })

    if (legendData.legendText.trim().length < 1) {
        errors.push(
            `Your legendData.legendText has to have a length of at least one character!`
        )
    }

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

    const renderFieldset = () => (
        <fieldset
            role={role}
            disabled={fieldsetData?.disabled}
            form={fieldsetData?.form}
            name={fieldsetData?.name}
            className={fieldsetData?.classNameFieldset}
            style={{ ...fieldsetData?.additionalStylingFieldset }}
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-busy={additionalAriaAttributes?.busy}
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-disabled={
                role === 'radiogroup'
                    ? additionalAriaAttributes?.disabled
                    : undefined
            }
            aria-errormessage={
                role === 'radiogroup'
                    ? additionalAriaAttributes?.errormessage
                    : undefined
            }
            aria-flowto={additionalAriaAttributes?.flowto}
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-invalid={
                role === 'radiogroup'
                    ? additionalAriaAttributes?.invalid
                    : undefined
            }
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-label={additionalAriaAttributes?.label}
            aria-live={additionalAriaAttributes?.live}
            aria-orientation={
                role === 'radiogroup'
                    ? additionalAriaAttributes?.orientation
                    : undefined
            }
            aria-owns={additionalAriaAttributes?.owns}
            aria-readonly={
                role === 'radiogroup'
                    ? additionalAriaAttributes?.readonly
                    : undefined
            }
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-required={
                role === 'radiogroup'
                    ? additionalAriaAttributes?.required
                    : undefined
            }
            aria-roledescription={additionalAriaAttributes?.roledescription}
        >
            <legend
                className={legendData?.classNameLegend}
                style={{ ...legendData?.additionalStylingLegend }}
            >
                {legendData.legendText}
            </legend>
            {inputLabelData.map((data, dataIndex) => (
                <div key={dataIndex} lang={data?.lang?.language}>
                    <input
                        aria-required={data?.inputRequired}
                        onChange={() => handleChange(dataIndex, data.inputType)}
                        onFocus={() => onFocusFunction && onFocusFunction()}
                        onMouseOver={() => onHoverFunction && onHoverFunction()}
                        id={data.id}
                        type={data.inputType}
                        autoComplete={data?.inputAutocomplete}
                        autoFocus={data?.inputAutofocus}
                        checked={checkedStates[dataIndex]}
                        dir={data?.inputDirname}
                        disabled={data?.inputDisabled}
                        form={data?.inputForm}
                        formNoValidate={data?.inputFormnovalidate}
                        list={data?.inputList}
                        max={data?.inputMax}
                        maxLength={data?.inputMaxlength}
                        min={data?.inputMin}
                        minLength={data?.inputMinlength}
                        multiple={data?.inputMultiple}
                        name={data?.inputName}
                        pattern={data?.inputPattern}
                        placeholder={data?.inputPlaceholder}
                        readOnly={data?.inputReadonly}
                        required={data?.inputRequired}
                        size={data?.inputSize}
                        step={data?.inputStep}
                        value={data?.inputValue}
                        style={{ ...data?.additionalStylingInput }}
                    />
                    <label
                        htmlFor={data.id}
                        form={data?.labelForm}
                        className={data?.classNameLabel}
                        style={{ ...data?.additionalStylingLabel }}
                    >
                        {data.labelText}
                    </label>
                </div>
            ))}
        </fieldset>
    )

    return (
        <>
            {formData ? (
                <form
                    className={formData?.classNameForm}
                    acceptCharset={formData?.acceptCharset}
                    action={formData?.action}
                    autoComplete={formData?.autocomplete}
                    encType={formData?.enctype}
                    method={formData?.method}
                    name={formData?.name}
                    noValidate={formData?.novalidate}
                    rel={formData?.rel}
                    target={formData?.target}
                    style={{ ...formData?.additionalStylingForm }}
                >
                    {renderFieldset()}
                </form>
            ) : (
                renderFieldset()
            )}
        </>
    )
}

export default WCAGARIA2H58H71
