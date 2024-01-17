import React, { CSSProperties, ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'

interface WCAGH86Props {
    accessibleText: string
    additionalStyling?: CSSProperties
    className?: string
    elementData?: GlobalAttributes
    element: 'span' | 'div' | 'abbr'
    role?: 'img'
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'checked'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'disabled'
        | 'errormessage'
        | 'expanded'
        | 'haspopup'
        | 'invalid'
        | 'label'
        | 'labelledby'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'multiselectable'
        | 'orientation'
        | 'placeholder'
        | 'posinset'
        | 'pressed'
        | 'readonly'
        | 'required'
        | 'rowcount'
        | 'rowindex'
        | 'rowindextext'
        | 'rowspan'
        | 'selected'
        | 'setsize'
        | 'sort'
        | 'valuemax'
        | 'valuemin'
        | 'valuenow'
        | 'valuetext'
    >
    children: ReactNode
}

const WCAGH86: React.FC<WCAGH86Props> = ({
    accessibleText,
    additionalAriaAttributes,
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
                    hidden={elementData?.hiddenElement}
                    id={elementData?.id}
                    inputMode={elementData?.inputmode}
                    lang={elementData?.lang}
                    spellCheck={elementData?.spellcheck}
                    tabIndex={elementData?.tabindex}
                    title={elementData?.title}
                    translate={elementData?.translate}
                    aria-atomic={additionalAriaAttributes?.atomic}
                    aria-braillelabel={additionalAriaAttributes?.braillelabel}
                    aria-brailleroledescription={
                        additionalAriaAttributes?.brailleroledescription
                    }
                    aria-busy={additionalAriaAttributes?.busy}
                    aria-controls={additionalAriaAttributes?.controls}
                    aria-current={additionalAriaAttributes?.current}
                    aria-describedby={additionalAriaAttributes?.describedby}
                    aria-description={additionalAriaAttributes?.description}
                    aria-details={additionalAriaAttributes?.details}
                    aria-flowto={additionalAriaAttributes?.flowto}
                    aria-hidden={additionalAriaAttributes?.hidden}
                    aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
                    aria-owns={additionalAriaAttributes?.owns}
                    aria-relevant={additionalAriaAttributes?.relevant}
                    aria-roledescription={
                        additionalAriaAttributes?.roledescription
                    }
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
                    hidden={elementData?.hiddenElement}
                    id={elementData?.id}
                    inputMode={elementData?.inputmode}
                    lang={elementData?.lang}
                    spellCheck={elementData?.spellcheck}
                    tabIndex={elementData?.tabindex}
                    title={elementData?.title}
                    translate={elementData?.translate}
                    aria-atomic={additionalAriaAttributes?.atomic}
                    aria-braillelabel={additionalAriaAttributes?.braillelabel}
                    aria-brailleroledescription={
                        additionalAriaAttributes?.brailleroledescription
                    }
                    aria-busy={additionalAriaAttributes?.busy}
                    aria-controls={additionalAriaAttributes?.controls}
                    aria-current={additionalAriaAttributes?.current}
                    aria-describedby={additionalAriaAttributes?.describedby}
                    aria-description={additionalAriaAttributes?.description}
                    aria-details={additionalAriaAttributes?.details}
                    aria-flowto={additionalAriaAttributes?.flowto}
                    aria-hidden={additionalAriaAttributes?.hidden}
                    aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
                    aria-owns={additionalAriaAttributes?.owns}
                    aria-relevant={additionalAriaAttributes?.relevant}
                    aria-roledescription={
                        additionalAriaAttributes?.roledescription
                    }
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
                    hidden={elementData?.hiddenElement}
                    id={elementData?.id}
                    inputMode={elementData?.inputmode}
                    lang={elementData?.lang}
                    spellCheck={elementData?.spellcheck}
                    tabIndex={elementData?.tabindex}
                    translate={elementData?.translate}
                    aria-atomic={additionalAriaAttributes?.atomic}
                    aria-braillelabel={additionalAriaAttributes?.braillelabel}
                    aria-brailleroledescription={
                        additionalAriaAttributes?.brailleroledescription
                    }
                    aria-busy={additionalAriaAttributes?.busy}
                    aria-controls={additionalAriaAttributes?.controls}
                    aria-current={additionalAriaAttributes?.current}
                    aria-describedby={additionalAriaAttributes?.describedby}
                    aria-description={additionalAriaAttributes?.description}
                    aria-details={additionalAriaAttributes?.details}
                    aria-flowto={additionalAriaAttributes?.flowto}
                    aria-hidden={additionalAriaAttributes?.hidden}
                    aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
                    aria-owns={additionalAriaAttributes?.owns}
                    aria-relevant={additionalAriaAttributes?.relevant}
                    aria-roledescription={
                        additionalAriaAttributes?.roledescription
                    }
                >
                    {children}
                </abbr>
            )
    }
}

export default WCAGH86
