import React, { CSSProperties, ReactNode } from 'react'

interface WCAGH44Props {
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
    id: string
    labelText: ReactNode
    name: string
    title?: string
    accept?: string
    additionalStyling?: CSSProperties
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
}

const WCAGH44: React.FC<WCAGH44Props> = ({
    accept,
    additionalStyling,
    altText,
    autocomplete,
    autofocus = false,
    checked = false,
    classNameLabel,
    classNameInput,
    cols,
    dirname,
    disabled = false,
    form,
    formaction,
    formmethod,
    formnovalidate = false,
    formtarget,
    height,
    id,
    labelText,
    list,
    inputType,
    max,
    maxlength,
    min,
    minlength,
    multiple = false,
    name,
    pattern,
    placeholder,
    readonly = false,
    required = false,
    rows,
    selectoptions,
    size,
    src,
    step,
    textareaText,
    title,
    value,
    width,
    wrap,
}) => {
    return (
        <>
            {inputType !== 'checkbox' && inputType !== 'radio' && (
                <label htmlFor={id} hidden={false} className={classNameLabel}>
                    {labelText}
                </label>
            )}
            {inputType === 'select' && (
                <select
                    autoFocus={autofocus}
                    className={classNameInput}
                    disabled={disabled}
                    form={form}
                    multiple={multiple}
                    name={name}
                    required={required}
                    size={size}
                    style={{ ...additionalStyling }}
                >
                    {selectoptions}
                </select>
            )}
            {inputType === 'textarea' && (
                <textarea
                    autoFocus={autofocus}
                    className={classNameInput}
                    cols={cols}
                    disabled={disabled}
                    form={form}
                    maxLength={maxlength}
                    name={name}
                    placeholder={placeholder}
                    readOnly={readonly}
                    required={required}
                    rows={rows}
                    wrap={wrap}
                    style={{ ...additionalStyling }}
                >
                    {textareaText}
                </textarea>
            )}
            {inputType !== 'select' && inputType !== 'textarea' && (
                <input
                    accept={accept}
                    alt={altText}
                    autoComplete={autocomplete}
                    autoFocus={autofocus}
                    checked={checked}
                    className={classNameInput}
                    dir={dirname}
                    disabled={disabled}
                    form={form}
                    formAction={formaction}
                    formMethod={formmethod}
                    formNoValidate={formnovalidate}
                    formTarget={formtarget}
                    height={height}
                    id={id}
                    type={inputType}
                    list={list}
                    max={max}
                    maxLength={maxlength}
                    min={min}
                    minLength={minlength}
                    multiple={multiple}
                    name={name}
                    pattern={pattern}
                    placeholder={placeholder}
                    readOnly={readonly}
                    required={required}
                    size={size}
                    src={src}
                    step={step}
                    title={title}
                    value={value}
                    width={width}
                    style={{ ...additionalStyling }}
                />
            )}
            {(inputType === 'checkbox' || inputType === 'radio') && (
                <label htmlFor={id} hidden={false} className={classNameLabel}>
                    {labelText}
                </label>
            )}
        </>
    )
}

export default WCAGH44
