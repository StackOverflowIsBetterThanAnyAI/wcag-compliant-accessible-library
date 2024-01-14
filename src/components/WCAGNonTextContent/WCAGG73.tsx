import React, { ReactNode } from 'react'

interface WCAGG73Props {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    childId: string
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
    classNameDiv?: string
    classNameLink?: string
    externalLink?: boolean
    ownId: string
    shortText?: ReactNode
    children: ReactNode
}

const WCAGG73: React.FC<WCAGG73Props> = ({
    additionalStyling,
    buttonText,
    childId,
    classNameDiv,
    classNameLink,
    divData,
    externalLink,
    ownId,
    shortText,
    children,
}) => {
    return (
        <div
            id={ownId}
            aria-describedby={childId}
            style={{ ...additionalStyling }}
            className={classNameDiv}
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
            <a
                href={externalLink ? childId : `#${childId}`}
                className={classNameLink}
            >
                {buttonText}
            </a>
            {shortText}
        </div>
    )
}

export default WCAGG73
