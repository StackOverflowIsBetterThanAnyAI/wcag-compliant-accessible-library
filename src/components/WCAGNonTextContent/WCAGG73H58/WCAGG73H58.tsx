import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../../interfaces/GlobalAttributes'
import { WAIARIAAttributes } from '../../interfaces/WAIARIAAttributes'
import { LinkAttributes } from '../../interfaces/LinkAttributes'
import { LangAttributes } from '../../interfaces/LangAttributes'

interface WCAGG73H58Props extends GlobalAttributes {
    buttonText: ReactNode
    childId: string
    ownId: string
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'braillelabel'
        | 'brailleroledescription'
        | 'colindex'
        | 'colindextext'
        | 'label'
        | 'labelledby'
        | 'rowindex'
        | 'rowindextext'
    >
    classNameDiv?: string
    classNameLink?: string
    divData?: GlobalAttributes
    externalLink?: boolean
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
    shortText?: ReactNode
    children: ReactNode
}

const WCAGG73H58: React.FC<WCAGG73H58Props> = ({
    additionalAriaAttributes,
    buttonText,
    childId,
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
    role,
    shortText,
    children,
}) => {
    const errors: string[] = []

    // checks if childId is an empty string
    if (childId.trim().length < 1) {
        errors.push(
            'Your childId attribute hast to have a length of at least one character!'
        )
    }

    // checks if ownId is an empty string
    if (ownId.trim().length < 1) {
        errors.push(
            'Your ownId attribute hast to have a length of at least one character!'
        )
    }

    // checks if children have a wrong type
    if (typeof children === 'boolean' || typeof children === 'number') {
        errors.push(
            `Your child element must not be a ${typeof children} value!`
        )
    }

    // checks if buttonText has a wrong type
    if (typeof buttonText === 'boolean' || typeof buttonText === 'number') {
        errors.push(
            `Your buttonText element must not be a ${typeof buttonText} value!`
        )
    }

    // checks if shortText has a wrong type
    if (typeof shortText === 'boolean' || typeof shortText === 'number') {
        errors.push(
            `Your shortText element must not be a ${typeof shortText} value!`
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
            aria-describedby={childId}
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
            aria-activedescendant={
                role === 'application' ||
                role === 'combobox' ||
                role === 'group' ||
                role === 'textbox'
                    ? additionalAriaAttributes?.activedescendant
                    : undefined
            }
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-autocomplete={
                role === 'combobox' ||
                role === 'textbox' ||
                role === 'searchbox'
                    ? additionalAriaAttributes?.autocomplete
                    : undefined
            }
            aria-busy={additionalAriaAttributes?.busy}
            aria-checked={
                role === 'checkbox' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'switch'
                    ? additionalAriaAttributes?.checked
                    : undefined
            }
            aria-colcount={
                role === 'grid' || role === 'table' || role === 'treegrid'
                    ? additionalAriaAttributes?.colcount
                    : undefined
            }
            aria-colspan={
                role === 'cell' ||
                role === 'columnheader' ||
                role === 'rowheader'
                    ? additionalAriaAttributes?.colspan
                    : undefined
            }
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-disabled={
                role === 'application' ||
                role === 'button' ||
                role === 'gridcell' ||
                role === 'group' ||
                role === 'link' ||
                role === 'menuitem' ||
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'tab' ||
                role === 'checkbox' ||
                role === 'columnheader' ||
                role === 'combobox' ||
                role === 'grid' ||
                role === 'listbox' ||
                role === 'menu' ||
                role === 'menubar' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'radiogroup' ||
                role === 'row' ||
                role === 'rowheader' ||
                role === 'searchbox' ||
                role === 'slider' ||
                role === 'spinbutton' ||
                role === 'switch' ||
                role === 'tablist' ||
                role === 'textbox' ||
                role === 'toolbar' ||
                role === 'treegrid'
                    ? additionalAriaAttributes?.disabled
                    : undefined
            }
            aria-errormessage={
                role === 'application' ||
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'gridcell' ||
                role === 'listbox' ||
                role === 'radiogroup' ||
                role === 'slider' ||
                role === 'spinbutton' ||
                role === 'textbox' ||
                role === 'columnheader' ||
                role === 'rowheader' ||
                role === 'searchbox' ||
                role === 'switch' ||
                role === 'treegrid'
                    ? additionalAriaAttributes?.errormessage
                    : undefined
            }
            aria-expanded={
                role === 'application' ||
                role === 'button' ||
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'gridcell' ||
                role === 'link' ||
                role === 'listbox' ||
                role === 'menuitem' ||
                role === 'row' ||
                role === 'rowheader' ||
                role === 'tab' ||
                role === 'columnheader' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'switch'
                    ? additionalAriaAttributes?.expanded
                    : undefined
            }
            aria-flowto={additionalAriaAttributes?.flowto}
            aria-haspopup={
                role === 'application' ||
                role === 'button' ||
                role === 'combobox' ||
                role === 'gridcell' ||
                role === 'link' ||
                role === 'menuitem' ||
                role === 'slider' ||
                role === 'tab' ||
                role === 'textbox' ||
                role === 'columnheader' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'rowheader' ||
                role === 'searchbox'
                    ? additionalAriaAttributes?.haspopup
                    : undefined
            }
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-invalid={
                role === 'application' ||
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'gridcell' ||
                role === 'listbox' ||
                role === 'radiogroup' ||
                role === 'slider' ||
                role === 'spinbutton' ||
                role === 'textbox' ||
                role === 'columnheader' ||
                role === 'rowheader' ||
                role === 'searchbox' ||
                role === 'switch' ||
                role === 'treegrid'
                    ? additionalAriaAttributes?.invalid
                    : undefined
            }
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-level={
                role === 'comment' || role === 'row'
                    ? additionalAriaAttributes?.level
                    : undefined
            }
            aria-live={additionalAriaAttributes?.live}
            aria-modal={
                role === 'alertdialog' || role === 'dialog'
                    ? additionalAriaAttributes?.modal
                    : undefined
            }
            aria-multiline={
                role === 'searchbox' || role === 'textbox'
                    ? additionalAriaAttributes?.multiline
                    : undefined
            }
            aria-multiselectable={
                role === 'grid' ||
                role === 'listbox' ||
                role === 'tablist' ||
                role === 'treegrid'
                    ? additionalAriaAttributes?.multiselectable
                    : undefined
            }
            aria-orientation={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'tablist' ||
                role === 'toolbar' ||
                role === 'listbox' ||
                role === 'menu' ||
                role === 'menubar' ||
                role === 'radiogroup' ||
                role === 'treegrid'
                    ? additionalAriaAttributes?.orientation
                    : undefined
            }
            aria-owns={additionalAriaAttributes?.owns}
            aria-placeholder={
                role === 'searchbox' || role === 'textbox'
                    ? additionalAriaAttributes?.placeholder
                    : undefined
            }
            aria-posinset={
                role === 'article' ||
                role === 'comment' ||
                role === 'menuitem' ||
                role === 'option' ||
                role === 'radio' ||
                role == 'row' ||
                role === 'tab' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.posinset
                    : undefined
            }
            aria-pressed={
                role === 'button'
                    ? additionalAriaAttributes?.pressed
                    : undefined
            }
            aria-readonly={
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'grid' ||
                role === 'gridcell' ||
                role === 'listbox' ||
                role === 'radiogroup' ||
                role === 'slider' ||
                role === 'spinbutton' ||
                role === 'textbox' ||
                role === 'columnheader' ||
                role === 'rowheader' ||
                role === 'searchbox' ||
                role === 'switch' ||
                role === 'treegrid'
                    ? additionalAriaAttributes?.readonly
                    : undefined
            }
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-required={
                role === 'checkbox' ||
                role === 'combobox' ||
                role === 'gridcell' ||
                role === 'listbox' ||
                role === 'radiogroup' ||
                role === 'spinbutton' ||
                role === 'textbox' ||
                role === 'columnheader' ||
                role === 'rowheader' ||
                role === 'searchbox' ||
                role === 'switch' ||
                role === 'treegrid'
                    ? additionalAriaAttributes?.required
                    : undefined
            }
            aria-roledescription={additionalAriaAttributes?.roledescription}
            aria-rowcount={
                role === 'table' || role === 'grid' || role === 'treegrid'
                    ? additionalAriaAttributes?.rowcount
                    : undefined
            }
            aria-rowspan={
                role === 'cell' ||
                role === 'columnheader' ||
                role === 'rowheader'
                    ? additionalAriaAttributes?.rowspan
                    : undefined
            }
            aria-selected={
                role === 'gridcell' ||
                role === 'option' ||
                role === 'row' ||
                role === 'tab' ||
                role === 'columnheader' ||
                role === 'rowheader'
                    ? additionalAriaAttributes?.selected
                    : undefined
            }
            aria-setsize={
                role === 'article' ||
                role === 'comment' ||
                role === 'menuitem' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'row' ||
                role === 'tab' ||
                role == 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.setsize
                    : undefined
            }
            aria-sort={
                role === 'columnheader' || role === 'rowheader'
                    ? additionalAriaAttributes?.sort
                    : undefined
            }
            aria-valuemax={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'spinbutton' ||
                role === 'progressbar'
                    ? additionalAriaAttributes?.valuemax
                    : undefined
            }
            aria-valuemin={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'spinbutton' ||
                role === 'progressbar'
                    ? additionalAriaAttributes?.valuemin
                    : undefined
            }
            aria-valuenow={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'spinbutton' ||
                role === 'progressbar'
                    ? additionalAriaAttributes?.valuenow
                    : undefined
            }
            aria-valuetext={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'spinbutton' ||
                role === 'progressbar'
                    ? additionalAriaAttributes?.valuetext
                    : undefined
            }
        >
            {children}
            <a
                href={externalLink ? childId : `#${childId}`}
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
            {shortText}
        </div>
    )
}

export default WCAGG73H58