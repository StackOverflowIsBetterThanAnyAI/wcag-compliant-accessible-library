import React, { ReactNode } from 'react'

interface WCAGG74Props {
    accessibleIds: string
    additionalStyling?: React.CSSProperties
    className?: string
    shortText: ReactNode
    divData?: {
        accesskey?: string
        contenteditable?: boolean | 'inherit' | 'plaintext-only'
        dir?: string
        draggable?: boolean
        hidden?: boolean
        id?: string
        inputmode?:
            | 'email'
            | 'search'
            | 'none'
            | 'numeric'
            | 'text'
            | 'tel'
            | 'url'
            | 'decimal'
        lang?: string
        spellcheck?: boolean
        tabindex?: number
        title?: string
        translate?: 'yes' | 'no'
    }
    children: ReactNode
}

const WCAGG74: React.FC<WCAGG74Props> = ({
    accessibleIds,
    additionalStyling,
    className,
    divData,
    shortText,
    children,
}) => {
    return (
        <div
            aria-describedby={accessibleIds}
            style={{ ...additionalStyling }}
            className={className}
            accessKey={divData?.accesskey}
            contentEditable={divData?.contenteditable}
            dir={divData?.dir}
            draggable={divData?.draggable}
            hidden={divData?.hidden}
            id={divData?.id}
            inputMode={divData?.inputmode}
            lang={divData?.lang}
            spellCheck={divData?.spellcheck}
            tabIndex={divData?.tabindex}
            title={divData?.title}
            translate={divData?.translate}
        >
            {children}
            {shortText}
        </div>
    )
}

export default WCAGG74
