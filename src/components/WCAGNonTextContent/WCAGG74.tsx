import React, { ReactNode } from 'react'
import { DivAttributes } from '../interfaces/DivAttributes'

interface WCAGG74Props extends DivAttributes {
    accessibleIds: string
    additionalStyling?: React.CSSProperties
    className?: string
    shortText: ReactNode
    divData?: DivAttributes
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
            hidden={divData?.hiddenDiv}
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
