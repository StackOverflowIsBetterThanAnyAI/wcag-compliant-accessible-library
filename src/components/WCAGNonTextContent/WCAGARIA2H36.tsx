import React, { CSSProperties } from 'react'
import { InputAttributes } from '../interfaces/InputAttributes'

interface WCAGARIA2H36Props {
    altText: string
    src: string
    additionalStyling?: CSSProperties
    inputData?: Omit<
        InputAttributes,
        | 'accept'
        | 'autocapitalize'
        | 'capture'
        | 'checked'
        | 'dirname'
        | 'max'
        | 'maxlength'
        | 'min'
        | 'minlength'
        | 'multiple'
        | 'pattern'
        | 'placeholder'
        | 'size'
        | 'step'
        | 'type'
        | 'value'
    >
    role?:
        | 'button'
        | 'link'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'radio'
        | 'switch'
    className?: string
}

const WCAGARIA2H36: React.FC<WCAGARIA2H36Props> = ({
    additionalStyling,
    altText,
    className,
    inputData,
    role,
    src,
}) => {
    return (
        <input
            alt={altText}
            type="image"
            src={src}
            role={role}
            className={className}
            autoComplete={inputData?.autocomplete}
            autoFocus={inputData?.autofocus}
            disabled={inputData?.disabled}
            form={inputData?.form}
            formAction={inputData?.formaction}
            formMethod={inputData?.formmethod}
            formNoValidate={inputData?.formnovalidate}
            formTarget={inputData?.formtarget}
            id={inputData?.id}
            list={inputData?.list}
            name={inputData?.name}
            readOnly={inputData?.readonly}
            required={inputData?.required}
            style={{
                height: inputData?.height,
                width: inputData?.width,
                ...additionalStyling,
            }}
        />
    )
}

export default WCAGARIA2H36
