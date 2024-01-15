import React, { CSSProperties, useState } from 'react'

interface WCAGARIA2H71Props {
    fieldsetData?: {
        disabled?: boolean
        form?: string
        name?: string
        className?: string
    }
    formData?: {
        acceptCharset?: string
        action?: string
        autocomplete?: 'on' | 'off'
        className?: string
        enctype?: string
        method?: 'get' | 'post'
        name?: string
        novalidate?: boolean
        rel?:
            | 'alternate'
            | 'author'
            | 'bookmark'
            | 'help'
            | 'license'
            | 'next'
            | 'nofollow'
            | 'noreferrer'
            | 'prefetch'
            | 'prev'
            | 'search'
            | 'tag'
        target?: '_blank' | '_parent' | '_self' | '_top'
        additionalStyling?: CSSProperties
    }
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
        inputMinLength?: number
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
        classNameInput?: string
        classNameLabel?: string
    }[]
    legendData: {
        legendText: string
        classNameLegend?: string
    }
    onClickFunction?: () => void
}

const WCAGARIA2H71: React.FC<WCAGARIA2H71Props> = ({
    fieldsetData,
    formData,
    inputLabelData,
    legendData,
    onClickFunction,
}) => {
    const [checkedStates, setCheckedStates] = useState(
        inputLabelData.map((data) => data?.inputChecked ?? false)
    )

    const handleChange = (index: number, type: 'checkbox' | 'radio') => {
        if (type === 'radio') {
            const newCheckedStates = checkedStates.map((_, i) => i === index)
            setCheckedStates(newCheckedStates)
        } else {
            const newCheckedStates = [...checkedStates]
            newCheckedStates[index] = !newCheckedStates[index]
            setCheckedStates(newCheckedStates)
        }
        onClickFunction && onClickFunction()
    }

    const renderFieldset = () => (
        <fieldset
            disabled={fieldsetData?.disabled}
            form={fieldsetData?.form}
            name={fieldsetData?.name}
            className={fieldsetData?.className}
        >
            <legend className={legendData?.classNameLegend}>
                {legendData.legendText}
            </legend>
            {inputLabelData.map((data, dataIndex) => (
                <div key={dataIndex}>
                    <input
                        aria-required={data?.inputRequired}
                        onChange={() => handleChange(dataIndex, data.inputType)}
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
                        minLength={data?.inputMinLength}
                        multiple={data?.inputMultiple}
                        name={data?.inputName}
                        pattern={data?.inputPattern}
                        placeholder={data?.inputPlaceholder}
                        readOnly={data?.inputReadonly}
                        required={data?.inputRequired}
                        size={data?.inputSize}
                        step={data?.inputStep}
                        value={data?.inputValue}
                    />
                    <label
                        htmlFor={data.id}
                        form={data?.labelForm}
                        className={data?.classNameLabel}
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
                    className={formData?.className}
                    acceptCharset={formData?.acceptCharset}
                    action={formData?.action}
                    autoComplete={formData?.autocomplete}
                    encType={formData?.enctype}
                    method={formData?.method}
                    name={formData?.name}
                    noValidate={formData?.novalidate}
                    rel={formData?.rel}
                    target={formData?.target}
                    style={{ ...formData?.additionalStyling }}
                >
                    {renderFieldset()}
                </form>
            ) : (
                renderFieldset()
            )}
        </>
    )
}

export default WCAGARIA2H71
