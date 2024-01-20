import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'

interface WCAGARIA10Props extends GlobalAttributes {
    ariaLabelledById: string
    className?: string
    divData?: GlobalAttributes
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

const WCAGARIA10Text: React.FC<WCAGARIA10Props> = ({
    ariaLabelledById,
    className,
    divData,
    role,
    children,
}) => {
    try {
        if (ariaLabelledById.length < 1) {
            throw new Error(
                'Your ariaLabelledById attribute hast to have a length of at least one character!'
            )
        }
        return (
            <div
                id={ariaLabelledById}
                style={{ ...divData?.additionalStyling }}
                className={className}
                role={role}
                accessKey={divData?.accesskey}
                contentEditable={divData?.contenteditable}
                dir={divData?.dir}
                draggable={divData?.draggable}
                hidden={divData?.hiddenElement}
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
    } catch (error: any) {
        console.error(error.message)
        return
    }
}

export default WCAGARIA10Text
