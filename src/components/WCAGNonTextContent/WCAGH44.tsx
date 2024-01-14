import React, { ReactNode, useState } from 'react'

interface WCAGH44Props {
    inputData: {
        id: string
        labelText: ReactNode
        name: string
        title?: string
        accept?: string
        altText?: string
        autocomplete?: 'on' | 'off'
        autofocus?: boolean
        checked?: boolean
        classNameLabel?: string
        classNameInput?: string
        cols?: number
        dirname?: string
        disabled?: boolean
        form?: string
        formaction?: string
        formmethod?: 'get' | 'post'
        formnovalidate?: boolean
        formtarget?: string
        height?: number | string
        list?: string
        max?: string
        maxlength?: number
        min?: string
        minlength?: number
        multiple?: boolean
        pattern?: string
        placeholder?: string
        readonly?: boolean
        required?: boolean
        selectoptions?: ReactNode
        rows?: number
        size?: number
        src?: string
        step?: number
        textareaText?: ReactNode
        value?: string
        width?: number | string
        wrap?: 'hard' | 'soft'
    }[]
    inputType:
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'search'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week'
        | 'select'
        | 'textarea'
    classNameLabel?: string
    onClickFunction?: () => void
}

const WCAGH44: React.FC<WCAGH44Props> = ({
    classNameLabel,
    inputData,
    inputType,
    onClickFunction,
}) => {
    const [checkedStates, setCheckedStates] = useState(
        inputData.map((data) => data?.checked ?? false)
    )

    const handleChange = (index: number, type: string) => {
        if (type === 'radio') {
            const newCheckedStates = checkedStates.map((_, i) => i === index)
            setCheckedStates(newCheckedStates)
        }
        if (type === 'checkbox') {
            const newCheckedStates = [...checkedStates]
            newCheckedStates[index] = !newCheckedStates[index]
            setCheckedStates(newCheckedStates)
        }
        onClickFunction && onClickFunction()
    }

    return (
        <>
            {inputData.map((data, dataIndex) => (
                <React.Fragment key={dataIndex}>
                    {inputType !== 'checkbox' && inputType !== 'radio' && (
                        <label
                            htmlFor={data.id}
                            hidden={false}
                            className={classNameLabel}
                        >
                            {data.labelText}
                        </label>
                    )}
                    {inputType === 'select' && (
                        <select
                            autoFocus={data?.autofocus}
                            className={data?.classNameInput}
                            disabled={data?.disabled}
                            form={data?.form}
                            multiple={data?.multiple}
                            name={data?.name}
                            required={data?.required}
                            size={data?.size}
                        >
                            {data.selectoptions}
                        </select>
                    )}
                    {inputType === 'textarea' && (
                        <textarea
                            autoFocus={data?.autofocus}
                            className={data?.classNameInput}
                            cols={data?.cols}
                            disabled={data?.disabled}
                            form={data?.form}
                            maxLength={data?.maxlength}
                            name={data?.name}
                            placeholder={data?.placeholder}
                            readOnly={data?.readonly}
                            required={data?.required}
                            rows={data?.rows}
                            wrap={data?.wrap}
                        >
                            {data.selectoptions}
                        </textarea>
                    )}
                    {inputType !== 'select' && inputType !== 'textarea' && (
                        <input
                            onChange={() => handleChange(dataIndex, inputType)}
                            accept={data?.accept}
                            alt={data?.altText}
                            autoComplete={data?.autocomplete}
                            autoFocus={data?.autofocus}
                            checked={checkedStates[dataIndex]}
                            className={data?.classNameInput}
                            dir={data?.dirname}
                            disabled={data?.disabled}
                            form={data?.form}
                            formAction={data?.formaction}
                            formMethod={data?.formmethod}
                            formNoValidate={data?.formnovalidate}
                            formTarget={data?.formtarget}
                            height={data?.height}
                            id={data?.id}
                            type={inputType}
                            list={data?.list}
                            max={data?.max}
                            maxLength={data?.maxlength}
                            min={data?.min}
                            minLength={data?.minlength}
                            multiple={data?.multiple}
                            name={data?.name}
                            pattern={data?.pattern}
                            placeholder={data?.placeholder}
                            readOnly={data?.readonly}
                            required={data?.required}
                            size={data?.size}
                            src={data?.src}
                            step={data?.step}
                            title={data?.title}
                            value={data?.value}
                            width={data?.width}
                        />
                    )}
                    {(inputType === 'checkbox' || inputType === 'radio') && (
                        <label
                            htmlFor={data.id}
                            hidden={false}
                            className={classNameLabel}
                        >
                            {data.labelText}
                        </label>
                    )}
                </React.Fragment>
            ))}
        </>
    )
}

export default WCAGH44
