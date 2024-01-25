import React from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGH58H86Props {
    accessibleText: string
    element: 'span' | 'div' | 'abbr'
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
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
    className?: string
    elementData?: GlobalAttributes
    lang?: LangAttributes
    role?: 'img'
    children: string
}

const WCAGH58H86: React.FC<WCAGH58H86Props> = ({
    accessibleText,
    additionalAriaAttributes,
    className,
    elementData,
    element,
    lang,
    role,
    children,
}) => {
    try {
        if (accessibleText.length < 1) {
            throw new Error(
                'Your accessibleText attribute hast to have a length of at least one character!'
            )
        }
        switch (element) {
            case 'span':
                return (
                    <span
                        aria-label={accessibleText}
                        role={role}
                        style={{ ...elementData?.additionalStyling }}
                        lang={lang?.language}
                        className={className}
                        accessKey={elementData?.accesskey}
                        contentEditable={elementData?.contenteditable}
                        dir={elementData?.dir}
                        draggable={elementData?.draggable}
                        hidden={elementData?.hiddenElement}
                        id={elementData?.id}
                        inputMode={elementData?.inputmode}
                        spellCheck={elementData?.spellcheck}
                        tabIndex={elementData?.tabindex}
                        title={elementData?.title}
                        translate={elementData?.translate}
                        aria-atomic={additionalAriaAttributes?.atomic}
                        aria-busy={additionalAriaAttributes?.busy}
                        aria-controls={additionalAriaAttributes?.controls}
                        aria-current={additionalAriaAttributes?.current}
                        aria-describedby={additionalAriaAttributes?.describedby}
                        aria-description={additionalAriaAttributes?.description}
                        aria-details={additionalAriaAttributes?.details}
                        aria-flowto={additionalAriaAttributes?.flowto}
                        aria-hidden={additionalAriaAttributes?.hidden}
                        aria-keyshortcuts={
                            additionalAriaAttributes?.keyshortcuts
                        }
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
                        style={{ ...elementData?.additionalStyling }}
                        lang={lang?.language}
                        className={className}
                        accessKey={elementData?.accesskey}
                        contentEditable={elementData?.contenteditable}
                        dir={elementData?.dir}
                        draggable={elementData?.draggable}
                        hidden={elementData?.hiddenElement}
                        id={elementData?.id}
                        inputMode={elementData?.inputmode}
                        spellCheck={elementData?.spellcheck}
                        tabIndex={elementData?.tabindex}
                        title={elementData?.title}
                        translate={elementData?.translate}
                        aria-atomic={additionalAriaAttributes?.atomic}
                        aria-busy={additionalAriaAttributes?.busy}
                        aria-controls={additionalAriaAttributes?.controls}
                        aria-current={additionalAriaAttributes?.current}
                        aria-describedby={additionalAriaAttributes?.describedby}
                        aria-description={additionalAriaAttributes?.description}
                        aria-details={additionalAriaAttributes?.details}
                        aria-flowto={additionalAriaAttributes?.flowto}
                        aria-hidden={additionalAriaAttributes?.hidden}
                        aria-keyshortcuts={
                            additionalAriaAttributes?.keyshortcuts
                        }
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
                        style={{ ...elementData?.additionalStyling }}
                        lang={lang?.language}
                        className={className}
                        role={role}
                        accessKey={elementData?.accesskey}
                        contentEditable={elementData?.contenteditable}
                        dir={elementData?.dir}
                        draggable={elementData?.draggable}
                        hidden={elementData?.hiddenElement}
                        id={elementData?.id}
                        inputMode={elementData?.inputmode}
                        spellCheck={elementData?.spellcheck}
                        tabIndex={elementData?.tabindex}
                        translate={elementData?.translate}
                        aria-atomic={additionalAriaAttributes?.atomic}
                        aria-busy={additionalAriaAttributes?.busy}
                        aria-controls={additionalAriaAttributes?.controls}
                        aria-current={additionalAriaAttributes?.current}
                        aria-describedby={additionalAriaAttributes?.describedby}
                        aria-description={additionalAriaAttributes?.description}
                        aria-details={additionalAriaAttributes?.details}
                        aria-flowto={additionalAriaAttributes?.flowto}
                        aria-hidden={additionalAriaAttributes?.hidden}
                        aria-keyshortcuts={
                            additionalAriaAttributes?.keyshortcuts
                        }
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
    } catch (error: any) {
        console.error(error.message)
        return
    }
}

export default WCAGH58H86
