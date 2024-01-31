import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGARIA10H58Props extends GlobalAttributes {
    ariaLabelledById: string
    className?: string
    divData?: GlobalAttributes
    lang?: LangAttributes
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

const WCAGARIA10H58Text: React.FC<WCAGARIA10H58Props> = ({
    ariaLabelledById,
    className,
    divData,
    lang,
    role,
    children,
}) => {
    const errors: string[] = []

    // checks if arialabelledById is an empty string
    if (ariaLabelledById.trim().length < 1) {
        errors.push(
            'Your ariaLabelledById attribute hast to have a length of at least one character!'
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
        <div
            id={ariaLabelledById}
            style={{ ...divData?.additionalStyling }}
            lang={lang?.language}
            className={className}
            role={role}
            accessKey={divData?.accesskey}
            contentEditable={divData?.contenteditable}
            dir={divData?.dir}
            draggable={divData?.draggable}
            hidden={divData?.hiddenElement}
            inputMode={divData?.inputmode}
            spellCheck={divData?.spellcheck}
            tabIndex={divData?.tabindex}
            title={divData?.title}
            translate={divData?.translate}
        >
            {children}
        </div>
    )
}

export default WCAGARIA10H58Text
