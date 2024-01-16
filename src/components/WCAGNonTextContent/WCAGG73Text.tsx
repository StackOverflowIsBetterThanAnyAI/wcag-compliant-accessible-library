import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'

interface WCAGG73Props extends GlobalAttributes {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    className?: string
    externalLink?: string
    ownId: string
    parentId: string
    divData?: GlobalAttributes
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
            hidden={divData?.hiddenElement}
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
