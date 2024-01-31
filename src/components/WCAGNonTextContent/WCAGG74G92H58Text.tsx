import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGG74G92H58Props {
    accessibleId: string
    className?: string
    lang?: LangAttributes
    pData?: GlobalAttributes
    role?:
        | 'alert'
        | 'alertdialog'
        | 'application' // should be avoided
        | 'article' // should be avoided
        | 'banner'
        | 'button' // should be avoided
        | 'cell' // should be avoided
        | 'checkbox' // should be avoided
        | 'columnheader' // should be avoided
        | 'combobox'
        | 'comment'
        | 'complementary'
        | 'contentinfo'
        | 'definition' // should be avoided
        | 'dialog'
        | 'document' // should be avoided
        | 'feed'
        | 'form'
        | 'grid' // should be avoided
        | 'gridcell' // should be avoided
        | 'group' // should be avoided
        | 'img' // should be avoided
        | 'link' // should be avoided
        | 'listbox' // should be avoided
        | 'log'
        | 'main'
        | 'marquee'
        | 'math'
        | 'menu'
        | 'menubar'
        | 'menuitem' // should be avoided
        | 'menuitemcheckbox' // should be avoided
        | 'menuitemradio' // should be avoided
        | 'navigation'
        | 'note'
        | 'option' // should be avoided
        | 'progressbar' // should be avoided
        | 'radio' // should be avoided
        | 'radiogroup' // should be avoided
        | 'region'
        | 'row' // should be avoided
        | 'rowgroup' // should be avoided
        | 'rowheader' // should be avoided
        | 'scrollbar'
        | 'search'
        | 'searchbox'
        | 'separator' // should be avoided
        | 'slider'
        | 'spinbutton'
        | 'status'
        | 'switch'
        | 'tab'
        | 'table' // should be avoided
        | 'tablist'
        | 'tabpanel'
        | 'textbox' // should be avoided
        | 'timer'
        | 'toolbar'
        | 'tooltip'
        | 'treegrid'
    children: ReactNode
}

const WCAGG74G92H58Text: React.FC<WCAGG74G92H58Props> = ({
    accessibleId,
    className,
    lang,
    pData,
    role,
    children,
}) => {
    const errors: string[] = []

    // checks if accessibleId is an empty string
    if (accessibleId.replace(' ', '').length < 1) {
        errors.push(
            'Your accessibleId attribute hast to have a length of at least one character!'
        )
    }

    // checks if children have a wrong type
    if (typeof children === 'boolean' || typeof children === 'number') {
        errors.push(
            `Your child element must not be a ${typeof children} value!`
        )
    }

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }
    return (
        <p
            id={accessibleId}
            style={{ ...pData?.additionalStyling }}
            lang={lang?.language}
            className={className}
            role={role}
            accessKey={pData?.accesskey}
            contentEditable={pData?.contenteditable}
            dir={pData?.dir}
            draggable={pData?.draggable}
            hidden={pData?.hiddenElement}
            inputMode={pData?.inputmode}
            spellCheck={pData?.spellcheck}
            tabIndex={pData?.tabindex}
            title={pData?.title}
            translate={pData?.translate}
        >
            {children}
        </p>
    )
}

export default WCAGG74G92H58Text
