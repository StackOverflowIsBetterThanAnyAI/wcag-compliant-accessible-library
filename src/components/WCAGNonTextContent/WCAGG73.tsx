import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'

interface WCAGG73Props extends GlobalAttributes {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    childId: string
    divData?: GlobalAttributes
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
            hidden={divData?.hiddenDiv}
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
