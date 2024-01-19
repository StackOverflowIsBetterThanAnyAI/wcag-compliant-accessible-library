import React, { ReactNode, useState } from 'react'
import { InputAttributes } from '../interfaces/InputAttributes'

interface WCAGH44Props {
    inputData: (Omit<InputAttributes, 'id' | 'name' | 'type'> & {
        id: string
    } & {
        labelText: ReactNode
    } & { name: string } & { title?: string } & { altText?: string } & {
        classNameLabel?: string
    } & { classNameInput?: string } & { cols?: number } & {
        selectoptions?: ReactNode
    } & { rows?: number } & { src?: string } & { textareaText?: ReactNode } & {
        wrap?: 'hard' | 'soft'
    })[]
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
    onClickFunction?: () => void
}

const WCAGH44: React.FC<WCAGH44Props> = ({
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
                            className={data?.classNameLabel}
                        >
                            {data.labelText}
                        </label>
                    )}
                    {inputType === 'select' && (
                        <select
                            onChange={() => handleChange(dataIndex, inputType)}
                            autoCapitalize={data?.autocapitalize}
                            autoComplete={data?.autocomplete}
                            autoFocus={data?.autofocus}
                            className={data?.classNameInput}
                            dir={data?.dirname}
                            disabled={data?.disabled}
                            form={data?.form}
                            id={data.id}
                            multiple={data?.multiple}
                            name={data?.name}
                            required={data?.required}
                            size={data?.size}
                            title={data?.title}
                            value={data?.value}
                            style={{
                                height: data?.height,
                                width: data?.width,
                                ...data?.additionalStyling,
                            }}
                        >
                            {data.selectoptions}
                        </select>
                    )}
                    {inputType === 'textarea' && (
                        <textarea
                            onChange={() => handleChange(dataIndex, inputType)}
                            autoCapitalize={data?.autocapitalize}
                            autoComplete={data?.autocomplete}
                            autoFocus={data?.autofocus}
                            className={data?.classNameInput}
                            dir={data?.dirname}
                            disabled={data?.disabled}
                            form={data?.form}
                            id={data?.id}
                            name={data?.name}
                            placeholder={data?.placeholder}
                            readOnly={data?.readonly}
                            required={data?.required}
                            title={data?.title}
                            value={data?.value}
                            style={{
                                height: data?.height,
                                width: data?.width,
                                ...data?.additionalStyling,
                            }}
                        >
                            {data.selectoptions}
                        </textarea>
                    )}
                    {inputType !== 'select' && inputType !== 'textarea' && (
                        <input
                            onChange={() => handleChange(dataIndex, inputType)}
                            accept={data?.accept}
                            alt={data?.altText}
                            autoCapitalize={data?.autocapitalize}
                            autoComplete={data?.autocomplete}
                            autoFocus={data?.autofocus}
                            capture={data?.capture}
                            checked={checkedStates[dataIndex]}
                            className={data?.classNameInput}
                            dir={data?.dirname}
                            disabled={data?.disabled}
                            form={data?.form}
                            formAction={data?.formaction}
                            formEncType={data?.formenctype}
                            formMethod={data?.formmethod}
                            formNoValidate={data?.formnovalidate}
                            formTarget={data?.formtarget}
                            id={data?.id}
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
                            type={inputType}
                            value={data?.value}
                            style={{
                                height: data?.height,
                                width: data?.width,
                                ...data?.additionalStyling,
                            }}
                        />
                    )}
                    {(inputType === 'checkbox' || inputType === 'radio') && (
                        <label
                            htmlFor={data.id}
                            hidden={false}
                            className={data?.classNameLabel}
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
