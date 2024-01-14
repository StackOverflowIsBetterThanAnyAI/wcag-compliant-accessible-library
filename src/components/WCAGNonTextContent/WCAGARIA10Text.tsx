import React, { CSSProperties, ReactNode } from 'react'

interface WCAGARIA10Props {
    additionalStyling?: CSSProperties
    ariaLabelledById: string
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
    children: ReactNode
}

const WCAGARIA10Text: React.FC<WCAGARIA10Props> = ({
    ariaLabelledById,
    additionalStyling,
    className,
    divData,
    children,
}) => {
    return (
        <div
            id={ariaLabelledById}
            style={{ ...additionalStyling }}
            className={className}
            accessKey={divData?.accesskey}
            contentEditable={divData?.contenteditable}
            dir={divData?.dir}
            draggable={divData?.draggable}
            hidden={divData?.hidden}
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

export default WCAGARIA10Text
