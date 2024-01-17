import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'
import { LinkAttributes } from '../interfaces/LinkAttributes'

interface WCAGG73Props extends GlobalAttributes {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    classNameDiv?: string
    classNameLink?: string
    externalLink?: string
    ownId: string
    parentId: string
    divData?: GlobalAttributes
    linkData?: Omit<LinkAttributes, 'href' | 'download' | 'hreflang'>
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

const WCAGG73Text: React.FC<WCAGG73Props> = ({
    additionalStyling,
    buttonText,
    classNameDiv,
    classNameLink,
    divData,
    externalLink,
    linkData,
    ownId,
    parentId,
    role,
    children,
}) => {
    return (
        <div
            id={ownId}
            style={{ ...additionalStyling }}
            className={classNameDiv}
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
            <p>
                <a
                    href={externalLink ? parentId : `#${parentId}`}
                    className={classNameLink}
                    media={linkData?.media}
                    ping={linkData?.ping}
                    referrerPolicy={linkData?.referrerpolicy}
                    rel={linkData?.rel}
                    target={linkData?.target}
                    type={linkData?.type}
                >
                    {buttonText}
                </a>
            </p>
        </div>
    )
}

export default WCAGG73Text
