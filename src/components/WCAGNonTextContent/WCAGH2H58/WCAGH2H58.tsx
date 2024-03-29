import React, { ReactNode } from 'react'
import { LinkAttributes } from '../../../interfaces/LinkAttributes'
import { ImageAttributes } from '../../../interfaces/ImageAttributes'
import { WAIARIAAttributes } from '../../../interfaces/WAIARIAAttributes'
import { LangAttributes } from '../../../interfaces/LangAttributes'

interface WCAGH2H58Props {
    imageData: ImageAttributes
    link: string
    altText?: string // It may only be missing if the text of the anchor can clearly describe the link
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'label'
        | 'labelledby'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'multiselectable'
        | 'rowcount'
        | 'rowindex'
        | 'rowindextext'
        | 'rowspan'
        | 'sort'
    >
    classNameImage?: string
    classNameLink?: string
    lang?: LangAttributes
    linkData?: LinkAttributes
    role?:
        | 'button'
        | 'checkbox'
        | 'doc-backlink'
        | 'doc-biblioref'
        | 'doc-glossref'
        | 'doc-noteref'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'option'
        | 'radio'
        | 'switch'
        | 'tab'
        | 'treeitem'
    childrenBeforeImage?: boolean
    onClickFunction?: () => void
    onFocusFunction?: () => void
    onHoverFunction?: () => void
    children: ReactNode
}

const WCAGH2H58: React.FC<WCAGH2H58Props> = ({
    additionalAriaAttributes,
    altText,
    classNameImage,
    classNameLink,
    imageData,
    link,
    linkData,
    lang,
    role,
    childrenBeforeImage,
    children,
    onClickFunction,
    onFocusFunction,
    onHoverFunction,
}) => {
    const errors: string[] = []

    // checks if children have a wrong type
    if (typeof children === 'boolean' || typeof children === 'number') {
        errors.push('Your child element must not be a boolean or number value!')
    }

    // checks if link is an empty string
    if (link.trim().length < 1) {
        errors.push(
            'Your link attribute hast to have a length of at least one character!'
        )
    }

    // checks if imageSource is an empty string
    if (imageData.imageSource.trim().length < 1) {
        errors.push(
            'Your imageData.imageSource attribute hast to have a length of at least one character!'
        )
    }

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

    return (
        <a
            href={linkData?.disabled ? undefined : link}
            style={{ ...linkData?.additionalStyling }}
            lang={lang?.language}
            className={classNameLink}
            onClick={() => onClickFunction && onClickFunction()}
            onFocus={() => onFocusFunction && onFocusFunction()}
            onMouseOver={() => onHoverFunction && onHoverFunction()}
            role={role}
            download={linkData?.download}
            hrefLang={linkData?.hreflang}
            media={linkData?.media}
            ping={linkData?.ping}
            referrerPolicy={linkData?.referrerpolicy}
            rel={linkData?.rel}
            target={linkData?.target}
            type={linkData?.type}
            aria-atomic={additionalAriaAttributes?.atomic}
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
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-errormessage={
                role === 'checkbox' || role === 'switch'
                    ? additionalAriaAttributes?.errormessage
                    : undefined
            }
            aria-expanded={
                role === 'button' ||
                role === 'checkbox' ||
                role === 'menuitem' ||
                role === 'tab' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'switch'
                    ? additionalAriaAttributes?.expanded
                    : undefined
            }
            aria-flowto={additionalAriaAttributes?.flowto}
            aria-haspopup={
                role === 'button' ||
                role === 'menuitem' ||
                role === 'tab' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.haspopup
                    : undefined
            }
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-invalid={
                role === 'checkbox' || role === 'switch'
                    ? additionalAriaAttributes?.invalid
                    : undefined
            }
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-live={additionalAriaAttributes?.live}
            aria-owns={additionalAriaAttributes?.owns}
            aria-posinset={
                role === 'menuitem' ||
                role === 'option' ||
                role === 'radio' ||
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
                role === 'checkbox' || role === 'switch'
                    ? additionalAriaAttributes?.readonly
                    : undefined
            }
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-required={
                role === 'checkbox' || role === 'switch'
                    ? additionalAriaAttributes?.required
                    : undefined
            }
            aria-roledescription={additionalAriaAttributes?.roledescription}
            aria-setsize={
                role === 'menuitem' ||
                role === 'option' ||
                role === 'radio' ||
                role === 'tab' ||
                role == 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.setsize
                    : undefined
            }
        >
            {childrenBeforeImage && children}
            <img
                alt={altText ?? ''}
                src={imageData.imageSource}
                className={classNameImage}
                crossOrigin={imageData?.crossorigin}
                decoding={imageData?.decoding}
                loading={imageData?.loading}
                referrerPolicy={imageData?.referrerpolicy}
                sizes={imageData?.sizes}
                style={{
                    height: imageData?.height,
                    width: imageData?.width,
                    ...imageData?.additionalStyling,
                }}
            />
            {!childrenBeforeImage && children}
        </a>
    )
}

export default WCAGH2H58
