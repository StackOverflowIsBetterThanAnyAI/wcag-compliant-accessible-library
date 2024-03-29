import React, { ReactNode } from 'react'
import { ImageAttributes } from '../../../interfaces/ImageAttributes'
import { LinkAttributes } from '../../../interfaces/LinkAttributes'
import { WAIARIAAttributes } from '../../../interfaces/WAIARIAAttributes'
import { LangAttributes } from '../../../interfaces/LangAttributes'

interface WCAGH30H58Props {
    link: string
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
    classNameLink?: string
    classNameImage?: string
    imageData?: (ImageAttributes & {
        altText?: string /* It may only be missing if the anchor text can describe the image */
    })[]
    lang?: LangAttributes
    linkData?: LinkAttributes
    onClickFunction?: () => void
    onFocusFunction?: () => void
    onHoverFunction?: () => void
    postImageText?: ReactNode
    preImageText?: ReactNode
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
}

const WCAGH30H58: React.FC<WCAGH30H58Props> = ({
    additionalAriaAttributes,
    classNameImage,
    classNameLink,
    imageData,
    link,
    linkData,
    lang,
    onClickFunction,
    onFocusFunction,
    onHoverFunction,
    postImageText,
    preImageText,
    role,
}) => {
    const errors: string[] = []

    // checks if link is an empty string
    if (link.trim().length < 1) {
        errors.push(
            'Your link attribute hast to have a length of at least one character!'
        )
    }

    // checks for wrong text types
    if (typeof preImageText === 'boolean' || typeof preImageText === 'number') {
        errors.push(
            `Your preImageText element must not be a ${typeof preImageText} value!`
        )
    }

    // checks for wrong text types
    if (
        typeof postImageText === 'boolean' ||
        typeof postImageText === 'number'
    ) {
        errors.push(
            `Your postImageText element must not be a ${typeof postImageText} value!`
        )
    }

    // checks for empty imageSource
    imageData &&
        imageData.forEach((data, dataIndex) => {
            if (data.imageSource.trim().length < 1) {
                errors.push(
                    `Your imageSource attribute in imageData[${dataIndex}] has to have a length of at least one character!`
                )
            }
        })

    // checks if there is any text or altText
    let altTextErrorPushed = false

    imageData &&
        imageData.forEach((data) => {
            if (
                !data.altText &&
                !postImageText &&
                !preImageText &&
                !altTextErrorPushed
            ) {
                errors.push(
                    `You must either save a descriptive text that can be read aloud inside imageData as an alt attribute of any <img /> element or save this text in preImageText or postImageText!`
                )
                altTextErrorPushed = true
            }
        })

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

    return (
        <a
            href={linkData?.disabled ? undefined : link}
            onClick={() => onClickFunction && onClickFunction()}
            onFocus={() => onFocusFunction && onFocusFunction()}
            onMouseOver={() => onHoverFunction && onHoverFunction()}
            style={{ ...linkData?.additionalStyling }}
            lang={lang?.language}
            className={classNameLink}
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
            {preImageText}
            {imageData?.map((data, dataIndex) => (
                <img
                    key={dataIndex}
                    className={classNameImage}
                    src={data.imageSource}
                    alt={data.altText ?? ''}
                    crossOrigin={data?.crossorigin}
                    decoding={data?.decoding}
                    loading={data?.loading}
                    referrerPolicy={data?.referrerpolicy}
                    sizes={data?.sizes}
                    style={{
                        height: data?.height,
                        width: data?.width,
                        ...data?.additionalStyling,
                    }}
                />
            ))}
            {postImageText}
        </a>
    )
}

export default WCAGH30H58
