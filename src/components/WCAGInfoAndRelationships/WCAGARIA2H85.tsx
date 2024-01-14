import React, { CSSProperties, ReactNode } from 'react'

interface WCAGARIA2H85Props {
    formData: {
        acceptCharset?: string
        action?: string
        autocomplete?: 'on' | 'off'
        className?: string
        enctype?: string
        method?: 'get' | 'post'
        name?: string
        novalidate?: boolean
        rel?: string
        target?: React.HTMLAttributeAnchorTarget
        additionalStyling?: CSSProperties
    }
    labelData: {
        for: string
        className?: string
        form?: string
        labelText: ReactNode
    }
    selectData: {
        id: string
        autofocus?: boolean
        className?: string
        disabled?: boolean
        form?: string
        seeMultiple?: boolean
        name: string
        required?: boolean
        size?: number
    }
    optionDataGroup: {
        className?: string
        disabledGroup?: boolean
        labelGroup?: string
    }[][]
    optionData: {
        className?: string
        disabled?: boolean
        label?: string
        selected?: boolean
        text: string
        value: string
    }[][]
}

const WCAGARIA2H85: React.FC<WCAGARIA2H85Props> = ({
    formData,
    labelData,
    optionData,
    optionDataGroup,
    selectData,
}) => {
    const renderOptionGroups = () => {
        return optionDataGroup.map((group, index) => {
            const label = group[0]?.labelGroup || ''
            const options = optionData[index]?.map((option) => (
                <option
                    key={option.value}
                    className={option?.className}
                    value={option.value}
                    disabled={option?.disabled}
                    label={option?.label}
                    selected={option?.selected}
                >
                    {option.text}
                </option>
            ))

            return (
                <optgroup key={label} label={label}>
                    {options}
                </optgroup>
            )
        })
    }
    return (
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
            <label
                htmlFor={labelData.for}
                form={labelData?.form}
                className={labelData?.className}
            >
                {labelData.labelText}
            </label>
            <select
                aria-required={selectData?.required}
                id={selectData.id}
                autoFocus={selectData?.autofocus}
                className={selectData?.className}
                disabled={selectData?.disabled}
                form={selectData?.form}
                multiple={selectData?.seeMultiple}
                name={selectData.name}
                required={selectData?.required}
                size={selectData?.size}
            >
                {renderOptionGroups()}
            </select>
        </form>
    )
}

export default WCAGARIA2H85
