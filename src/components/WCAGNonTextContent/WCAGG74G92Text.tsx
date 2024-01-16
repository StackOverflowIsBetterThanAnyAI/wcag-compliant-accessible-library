import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'

interface WCAGG74G92Props {
    accessibleId: string
    additionalStyling?: React.CSSProperties
    className?: string
    pData?: GlobalAttributes
    children: ReactNode
}

const WCAGG74G92Text: React.FC<WCAGG74G92Props> = ({
    accessibleId,
    additionalStyling,
    className,
    pData,
    children,
}) => {
    return (
        <p
            id={accessibleId}
            style={{ ...additionalStyling }}
            className={className}
            accessKey={pData?.accesskey}
            contentEditable={pData?.contenteditable}
            dir={pData?.dir}
            draggable={pData?.draggable}
            hidden={pData?.hiddenElement}
            inputMode={pData?.inputmode}
            lang={pData?.lang}
            spellCheck={pData?.spellcheck}
            tabIndex={pData?.tabindex}
            title={pData?.title}
            translate={pData?.translate}
        >
            {children}
        </p>
    )
}

export default WCAGG74G92Text
