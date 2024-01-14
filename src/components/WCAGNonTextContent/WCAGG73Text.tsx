import React, { ReactNode } from 'react'

interface WCAGG73Props {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    className?: string
    externalLink?: string
    ownId: string
    parentId: string
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

const WCAGG73Text: React.FC<WCAGG73Props> = ({
    additionalStyling,
    buttonText,
    className,
    divData,
    externalLink,
    ownId,
    parentId,
    children,
}) => {
    return (
        <div
            id={ownId}
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
            <p>
                <a href={externalLink ? parentId : `#${parentId}`}>
                    {buttonText}
                </a>
            </p>
        </div>
    )
}

export default WCAGG73Text
