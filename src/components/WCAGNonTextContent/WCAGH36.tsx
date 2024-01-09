import React, { CSSProperties } from 'react'

interface WCAGH36Props {
    altText: string
    src: string
    id?: string
    title?: string
    accept?: string
    additionalStyling?: CSSProperties
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
    step?: number
    value?: string
    width?: number | string
}

const WCAGH36: React.FC<WCAGH36Props> = ({
    accept,
    additionalStyling,
    altText,
    autocomplete,
    autofocus = false,
    checked = false,
    className,
    dirname,
    disabled = false,
    form,
    formaction,
    formmethod,
    formnovalidate = false,
    formtarget,
    height,
    id,
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
            type="image"
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

export default WCAGH36
