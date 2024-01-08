import React, { CSSProperties } from 'react'

interface NonTextContentProps {
    id: string
    inputType:
        | 'button'
        | 'checkbox'
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
        | 'radio'
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
    accept?: string
    additionalStyling?: CSSProperties
    altText?: string
    autocomplete?: 'on' | 'off'
    autofocus?: boolean
    checked?: boolean
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
    name?: string
    pattern?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    size?: number
    src?: string
    step?: number
    value?: string
    width?: number | string
}

const WCAGNonTextContentH65: React.FC<NonTextContentProps> = ({
    accept,
    additionalStyling,
    altText,
    autocomplete,
    autofocus = false,
    checked = false,
    dirname,
    disabled = false,
    form,
    formaction,
    formmethod,
    formnovalidate = false,
    formtarget,
    height,
    id,
    inputType,
    list,
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
    size,
    src,
    step,
    title,
    value,
    width,
}) => {
    return (
        <input
            accept={accept}
            alt={altText}
            autoComplete={autocomplete}
            autoFocus={autofocus}
            checked={checked}
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
    )
}

export default WCAGNonTextContentH65
