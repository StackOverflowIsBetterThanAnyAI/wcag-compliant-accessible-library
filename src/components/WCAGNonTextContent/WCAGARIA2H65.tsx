import React, { CSSProperties } from 'react'

interface WCAGARIA2H65Props {
    id: string
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
    accept?: string
    additionalStyling?: CSSProperties
    altText?: string
    autocomplete?: 'on' | 'off'
    autofocus?: boolean
    checked?: boolean
    className?: string
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

const WCAGARIA2H65: React.FC<WCAGARIA2H65Props> = ({
    accept,
    additionalStyling,
    altText,
    autocomplete,
    autofocus,
    className,
    dirname,
    disabled,
    form,
    formaction,
    formmethod,
    formnovalidate,
    formtarget,
    height,
    id,
    inputType,
    list,
    max,
    maxlength,
    min,
    minlength,
    multiple,
    name,
    pattern,
    placeholder,
    readonly,
    required,
    size,
    src,
    step,
    title,
    value,
    width,
}) => {
    return (
        <input
            aria-required={required}
            accept={accept}
            alt={altText}
            autoComplete={autocomplete}
            autoFocus={autofocus}
            className={className}
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

export default WCAGARIA2H65
