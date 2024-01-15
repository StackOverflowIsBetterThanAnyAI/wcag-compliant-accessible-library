import React, { CSSProperties, ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'

interface WCAGARIA10Props extends GlobalAttributes {
    additionalStyling?: CSSProperties
    ariaLabelledById: string
    className?: string
    divData?: GlobalAttributes
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
            hidden={divData?.hiddenDiv}
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
