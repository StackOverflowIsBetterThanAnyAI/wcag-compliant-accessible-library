import React, { CSSProperties, ReactNode } from 'react'

interface WCAGARIA12Props {
    additionalStyling?: CSSProperties
    ariaLevel?: number
    children: ReactNode
    className?: string
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
}

const WCAGARIA12: React.FC<WCAGARIA12Props> = ({
    additionalStyling,
    ariaLevel,
    className,
    divData,
    children,
}) => {
    return (
        <div
            role="heading"
            aria-level={ariaLevel}
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
        </div>
    )
}

export default WCAGARIA12
