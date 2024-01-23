import React, { CSSProperties, ReactNode, useState } from 'react'
import { InputAttributes } from '../interfaces/InputAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'

interface WCAGH44Props {
    inputData: (Omit<
        InputAttributes,
        'additionalStyling' | 'id' | 'name' | 'type'
    > & {
        id: string
    } & { additionalStylingInput?: CSSProperties } & {
        additionalStylingLabel?: CSSProperties
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
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'checked'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'describedby'
        | 'disabled'
        | 'errormessage'
        | 'expanded'
        | 'haspopup'
        | 'invalid'
        | 'label'
        | 'labelledbyid'
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
    onClickFunction?: () => void
    role?:
        | 'menu'
        | 'button' // should be avoided
        | 'combobox'
        | 'menuitemcheckbox' // should be avoided
        | 'menuitemradio' // should be avoided
        | 'option' // should be avoided
        | 'searchbox'
        | 'spinbutton'
        | 'switch'
}

const WCAGH44: React.FC<WCAGH44Props> = ({
    additionalAriaAttributes,
    inputData,
    inputType,
    onClickFunction,
    role,
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

    const hasNumberGreaterThanOne = (value: string | undefined): boolean => {
        if (!value) return true
        const numericValue = parseInt(value, 10)
        return !isNaN(numericValue) && numericValue > 1
    }

    const isRoleAssignable = (role: string | undefined) => {
        if (!role) return false
        if (inputType === 'checkbox') {
            if (
                role === 'button' ||
                role === 'menuitemcheckbox' ||
                role === 'option' ||
                role === 'switch'
            )
                return true
        }
        if (inputType === 'text') {
            if (
                role === 'combobox' ||
                role === 'searchbox' ||
                role === 'spinbutton'
            )
                return true
        }
        if (inputType === 'radio' && role === 'menuitemradio') return true
        return false
    }

    const errors: string[] = []

    inputData.forEach((data, dataIndex) => {
        if (data.id.length < 1) {
            errors.push(
                `Your id attribute in inputData[${dataIndex}] has to have a length of at least one character!`
            )
        }
    })

    inputData.forEach((data, dataIndex) => {
        if (data.name.length < 1) {
            errors.push(
                `Your name attribute in inputData[${dataIndex}] has to have a length of at least one character!`
            )
        }
    })

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
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
                            style={{ ...data?.additionalStylingLabel }}
                            aria-atomic={additionalAriaAttributes?.atomic}
                            aria-busy={additionalAriaAttributes?.busy}
                            aria-controls={additionalAriaAttributes?.controls}
                            aria-current={additionalAriaAttributes?.current}
                            aria-description={
                                additionalAriaAttributes?.description
                            }
                            aria-details={additionalAriaAttributes?.details}
                            aria-flowto={additionalAriaAttributes?.flowto}
                            aria-hidden={additionalAriaAttributes?.hidden}
                            aria-keyshortcuts={
                                additionalAriaAttributes?.keyshortcuts
                            }
                            aria-live={additionalAriaAttributes?.live}
                            aria-owns={additionalAriaAttributes?.owns}
                            aria-relevant={additionalAriaAttributes?.relevant}
                            aria-roledescription={
                                additionalAriaAttributes?.roledescription
                            }
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
                            role={
                                !data?.multiple &&
                                !hasNumberGreaterThanOne(data?.value) &&
                                role === 'menu'
                                    ? role
                                    : undefined
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
                            name={data.name}
                            required={data?.required}
                            size={data?.size}
                            title={data?.title}
                            value={inputValues[dataIndex]}
                            style={{
                                height: data?.height,
                                width: data?.width,
                                ...data?.additionalStylingInput,
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
                            name={data.name}
                            placeholder={data?.placeholder}
                            readOnly={data?.readonly}
                            required={data?.required}
                            title={data?.title}
                            value={inputValues[dataIndex]}
                            style={{
                                height: data?.height,
                                width: data?.width,
                                ...data?.additionalStylingInput,
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
                            role={isRoleAssignable(role) ? role : undefined}
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
                            name={data.name}
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
                                ...data?.additionalStylingInput,
                            }}
                        />
                    )}
                    {(inputType === 'checkbox' || inputType === 'radio') && (
                        <label
                            htmlFor={data.id}
                            hidden={false}
                            className={data?.classNameLabel}
                            style={{ ...data?.additionalStylingLabel }}
                            aria-atomic={additionalAriaAttributes?.atomic}
                            aria-busy={additionalAriaAttributes?.busy}
                            aria-controls={additionalAriaAttributes?.controls}
                            aria-current={additionalAriaAttributes?.current}
                            aria-description={
                                additionalAriaAttributes?.description
                            }
                            aria-details={additionalAriaAttributes?.details}
                            aria-flowto={additionalAriaAttributes?.flowto}
                            aria-hidden={additionalAriaAttributes?.hidden}
                            aria-keyshortcuts={
                                additionalAriaAttributes?.keyshortcuts
                            }
                            aria-live={additionalAriaAttributes?.live}
                            aria-owns={additionalAriaAttributes?.owns}
                            aria-relevant={additionalAriaAttributes?.relevant}
                            aria-roledescription={
                                additionalAriaAttributes?.roledescription
                            }
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
