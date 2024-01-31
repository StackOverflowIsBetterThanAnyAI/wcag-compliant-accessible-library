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
    const errors: string[] = []

    // checks if ariaLevel has a number which is too low
    if (ariaLevel < 1) {
        errors.push('Your ariaLevel attribute hast to be at least 1!')
    }

    // checks if ariaLevel is a float value
    if (/^[0-9]+([.,][0-9]*)$/.test(ariaLevel.toString())) {
        errors.push(
            'Your ariaLevel attribute must be an integer value and no float value!'
        )
    }

    // checks if children have a boolean value
    if (typeof children === 'boolean') {
        errors.push('Your child element must not have a boolean value!')
    }

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
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
}

export default WCAGARIA12H58
