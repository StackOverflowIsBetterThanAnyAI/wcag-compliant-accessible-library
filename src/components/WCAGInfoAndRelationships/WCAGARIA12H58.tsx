import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGARIA12H58Props extends GlobalAttributes {
    ariaLevel: number
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
    divData?: GlobalAttributes
    lang?: LangAttributes
    children: ReactNode
}

const WCAGARIA12H58: React.FC<WCAGARIA12H58Props> = ({
    additionalAriaAttributes,
    ariaLevel,
    className,
    divData,
    lang,
    children,
}) => {
    try {
        if (ariaLevel < 1) {
            throw new Error('Your ariaLevel attribute hast to be at least 1!')
        }

        if (/^[0-9]+([.,][0-9]*)$/.test(ariaLevel.toString())) {
            throw new Error(
                'Your ariaLevel attribute must be an integer value and no float value!'
            )
        }

        return (
            <div
                role="heading"
                aria-level={ariaLevel}
                style={{ ...divData?.additionalStyling }}
                lang={lang?.language}
                className={className}
                accessKey={divData?.accesskey}
                contentEditable={divData?.contenteditable}
                dir={divData?.dir}
                draggable={divData?.draggable}
                hidden={divData?.hiddenElement}
                id={divData?.id}
                inputMode={divData?.inputmode}
                spellCheck={divData?.spellcheck}
                tabIndex={divData?.tabindex}
                title={divData?.title}
                translate={divData?.translate}
                aria-atomic={additionalAriaAttributes?.atomic}
                aria-busy={additionalAriaAttributes?.busy}
                aria-controls={additionalAriaAttributes?.controls}
                aria-current={additionalAriaAttributes?.current}
                aria-describedby={additionalAriaAttributes?.describedby}
                aria-description={additionalAriaAttributes?.description}
                aria-details={additionalAriaAttributes?.details}
                aria-flowto={additionalAriaAttributes?.flowto}
                aria-hidden={additionalAriaAttributes?.hidden}
                aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
                aria-live={additionalAriaAttributes?.live}
                aria-owns={additionalAriaAttributes?.owns}
                aria-relevant={additionalAriaAttributes?.relevant}
                aria-roledescription={additionalAriaAttributes?.roledescription}
            >
                {children}
            </div>
        )
    } catch (error: any) {
        console.error(error.message)
        return
    }
}

export default WCAGARIA12H58
