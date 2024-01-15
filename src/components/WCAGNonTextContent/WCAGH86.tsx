import React, { CSSProperties, ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'

interface WCAGH86Props {
    accessibleText: string
    additionalStyling?: CSSProperties
    className?: string
    elementData?: GlobalAttributes
    element: 'span' | 'div' | 'abbr'
    role?: 'img'
    children: ReactNode
}

const WCAGH86: React.FC<WCAGH86Props> = ({
    accessibleText,
    additionalStyling,
    className,
    elementData,
    element,
    role,
    children,
}) => {
    switch (element) {
        case 'span':
            return (
                <span
                    aria-label={accessibleText}
                    role={role}
                    style={{ ...additionalStyling }}
                    className={className}
                    accessKey={elementData?.accesskey}
                    contentEditable={elementData?.contenteditable}
                    dir={elementData?.dir}
                    draggable={elementData?.draggable}
                    hidden={elementData?.hiddenDiv}
                    id={elementData?.id}
                    inputMode={elementData?.inputmode}
                    lang={elementData?.lang}
                    spellCheck={elementData?.spellcheck}
                    tabIndex={elementData?.tabindex}
                    title={elementData?.title}
                    translate={elementData?.translate}
                >
                    {children}
                </span>
            )
        case 'div':
            return (
                <div
                    aria-label={accessibleText}
                    role={role}
                    style={{ ...additionalStyling }}
                    className={className}
                    accessKey={elementData?.accesskey}
                    contentEditable={elementData?.contenteditable}
                    dir={elementData?.dir}
                    draggable={elementData?.draggable}
                    hidden={elementData?.hiddenDiv}
                    id={elementData?.id}
                    inputMode={elementData?.inputmode}
                    lang={elementData?.lang}
                    spellCheck={elementData?.spellcheck}
                    tabIndex={elementData?.tabindex}
                    title={elementData?.title}
                    translate={elementData?.translate}
                >
                    {children}
                </div>
            )
        case 'abbr':
            return (
                <abbr
                    title={accessibleText}
                    style={{ ...additionalStyling }}
                    className={className}
                    accessKey={elementData?.accesskey}
                    contentEditable={elementData?.contenteditable}
                    dir={elementData?.dir}
                    draggable={elementData?.draggable}
                    hidden={elementData?.hiddenDiv}
                    id={elementData?.id}
                    inputMode={elementData?.inputmode}
                    lang={elementData?.lang}
                    spellCheck={elementData?.spellcheck}
                    tabIndex={elementData?.tabindex}
                    translate={elementData?.translate}
                >
                    {children}
                </abbr>
            )
    }
}

export default WCAGH86
