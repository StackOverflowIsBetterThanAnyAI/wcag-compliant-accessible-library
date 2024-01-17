import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'

interface WCAGARIA12Props extends GlobalAttributes {
    ariaLevel?: number
    children: ReactNode
    className?: string
    divData?: GlobalAttributes
}

const WCAGARIA12: React.FC<WCAGARIA12Props> = ({
    ariaLevel,
    className,
    divData,
    children,
}) => {
    return (
        <div
            role="heading"
            aria-level={ariaLevel}
            style={{ ...divData?.additionalStyling }}
            className={className}
            accessKey={divData?.accesskey}
            contentEditable={divData?.contenteditable}
            dir={divData?.dir}
            draggable={divData?.draggable}
            hidden={divData?.hiddenElement}
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
