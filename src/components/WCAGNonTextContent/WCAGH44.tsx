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
    const [checkedStatesRadioCheckbox, setCheckedStatesRadioCheckbox] =
        useState(inputData.map((data) => data?.checked ?? false))

    const [inputValues, setInputValues] = useState<string[]>(
        inputData.map((data) => data?.value || '')
    )

    const handleChange = (index: number, type: string, newValue: string) => {
        if (type === 'radio') {
            const newCheckedStatesRadioCheckbox =
                checkedStatesRadioCheckbox.map((_, i) => i === index)
            setCheckedStatesRadioCheckbox(newCheckedStatesRadioCheckbox)
        }
        if (type === 'checkbox') {
            const newCheckedStatesRadioCheckbox = [
                ...checkedStatesRadioCheckbox,
            ]
            newCheckedStatesRadioCheckbox[index] =
                !newCheckedStatesRadioCheckbox[index]
            setCheckedStatesRadioCheckbox(newCheckedStatesRadioCheckbox)
        } else {
            const newInputValues = [...inputValues]
            newInputValues[index] = newValue
            setInputValues(newInputValues)
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
                            onChange={(e) =>
                                handleChange(
                                    dataIndex,
                                    inputType,
                                    e.target.value
                                )
                            }
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
                            value={inputValues[dataIndex]}
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
                            onChange={(e) =>
                                handleChange(
                                    dataIndex,
                                    inputType,
                                    e.target.value
                                )
                            }
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
                            value={inputValues[dataIndex]}
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
                            onChange={(e) =>
                                handleChange(
                                    dataIndex,
                                    inputType,
                                    e.target.value
                                )
                            }
                            accept={data?.accept}
                            alt={data?.altText}
                            autoCapitalize={data?.autocapitalize}
                            autoComplete={data?.autocomplete}
                            autoFocus={data?.autofocus}
                            capture={data?.capture}
                            checked={checkedStatesRadioCheckbox[dataIndex]}
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
                            value={inputValues[dataIndex]}
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
