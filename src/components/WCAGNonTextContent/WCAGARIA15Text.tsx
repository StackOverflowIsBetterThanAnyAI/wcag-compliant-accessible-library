import React, { CSSProperties } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'

interface WCAGARIA15Props {
    accessibleId: string
    additionalStyling?: CSSProperties
    pData?: Omit<GlobalAttributes, 'id'>
    className?: string
    children: string
}

const WCAGARIA15Text: React.FC<WCAGARIA15Props> = ({
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

export default WCAGARIA15Text
