import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../interfaces/GlobalAttributes'
import { LinkAttributes } from '../interfaces/LinkAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGG73H58Props extends GlobalAttributes {
    buttonText: ReactNode
    ownId: string
    parentId: string
    classNameDiv?: string
    classNameLink?: string
    divData?: GlobalAttributes
    externalLink?: string
    lang?: LangAttributes
    linkData?: Omit<LinkAttributes, 'href' | 'download' | 'hreflang'>
    onClickFunction?: () => void
    onFocusFunction?: () => void
    onHoverFunction?: () => void
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

const WCAGG73H58Text: React.FC<WCAGG73H58Props> = ({
    buttonText,
    classNameDiv,
    classNameLink,
    divData,
    externalLink,
    lang,
    linkData,
    onClickFunction,
    onFocusFunction,
    onHoverFunction,
    ownId,
    parentId,
    role,
    children,
}) => {
    const errors: string[] = []

    if (parentId.length < 1) {
        errors.push(
            'Your parentId attribute hast to have a length of at least one character!'
        )
    }

    if (ownId.length < 1) {
        errors.push(
            'Your ownId attribute hast to have a length of at least one character!'
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
            id={ownId}
            style={{ ...divData?.additionalStyling }}
            lang={lang?.language}
            className={classNameDiv}
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
            <p>
                <a
                    href={externalLink ? parentId : `#${parentId}`}
                    onClick={() => onClickFunction && onClickFunction()}
                    onFocus={() => onFocusFunction && onFocusFunction()}
                    onMouseOver={() => onHoverFunction && onHoverFunction()}
                    className={classNameLink}
                    media={linkData?.media}
                    ping={linkData?.ping}
                    referrerPolicy={linkData?.referrerpolicy}
                    rel={linkData?.rel}
                    style={{ ...linkData?.additionalStyling }}
                    target={linkData?.target}
                    type={linkData?.type}
                >
                    {buttonText}
                </a>
            </p>
        </div>
    )
}

export default WCAGG73H58Text
