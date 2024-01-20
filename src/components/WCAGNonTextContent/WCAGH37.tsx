import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'

interface WCAGH37Props {
    altText: string
    imageData: ImageAttributes
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'braillelabel'
        | 'brailleroledescription'
        | 'label'
        | 'labelledby'
        | 'activedescendant'
        | 'autocomplete'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
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
    className?: string
    role?:
        | 'button'
        | 'checkbox'
        | 'doc-cover'
        | 'link'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'option'
        | 'progressbar'
        | 'scrollbar'
        | 'separator'
        | 'slider'
        | 'switch'
        | 'tab'
        | 'treeitem'
}

const WCAGH37: React.FC<WCAGH37Props> = ({
    additionalAriaAttributes,
    altText,
    className,
    imageData,
    role,
}) => {
    const errors: string[] = []

    if (altText.length < 1) {
        errors.push(
            'Your altText attribute hast to have a length of at least one character!'
        )
    }

    if (imageData.imageSource.length < 1) {
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
        <img
            src={imageData.imageSource}
            alt={altText}
            className={className}
            role={role}
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
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-busy={additionalAriaAttributes?.busy}
            aria-checked={
                role === 'checkbox' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'option' ||
                role === 'switch'
                    ? additionalAriaAttributes?.checked
                    : undefined
            }
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-disabled={
                role === 'button' ||
                role === 'link' ||
                role === 'menuitem' ||
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'tab' ||
                role === 'checkbox' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio' ||
                role === 'option' ||
                role === 'slider' ||
                role === 'switch'
                    ? additionalAriaAttributes?.disabled
                    : undefined
            }
            aria-errormessage={
                role === 'checkbox' || role === 'slider' || role === 'switch'
                    ? additionalAriaAttributes?.errormessage
                    : undefined
            }
            aria-expanded={
                role === 'button' ||
                role === 'checkbox' ||
                role === 'link' ||
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
                role === 'link' ||
                role === 'menuitem' ||
                role === 'slider' ||
                role === 'tab' ||
                role === 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.haspopup
                    : undefined
            }
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-invalid={
                role === 'checkbox' || role === 'slider' || role === 'switch'
                    ? additionalAriaAttributes?.invalid
                    : undefined
            }
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-live={additionalAriaAttributes?.live}
            aria-orientation={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider'
                    ? additionalAriaAttributes?.orientation
                    : undefined
            }
            aria-owns={additionalAriaAttributes?.owns}
            aria-posinset={
                role === 'menuitem' ||
                role === 'option' ||
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
                role === 'checkbox' || role === 'slider' || role === 'switch'
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
            aria-selected={
                role === 'option'
                    ? additionalAriaAttributes?.selected
                    : undefined
            }
            aria-setsize={
                role === 'menuitem' ||
                role === 'option' ||
                role === 'tab' ||
                role == 'menuitemcheckbox' ||
                role === 'menuitemradio'
                    ? additionalAriaAttributes?.setsize
                    : undefined
            }
            aria-valuemax={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'progressbar'
                    ? additionalAriaAttributes?.valuemax
                    : undefined
            }
            aria-valuemin={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'progressbar'
                    ? additionalAriaAttributes?.valuemin
                    : undefined
            }
            aria-valuenow={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'progressbar'
                    ? additionalAriaAttributes?.valuenow
                    : undefined
            }
            aria-valuetext={
                role === 'scrollbar' ||
                role === 'separator' ||
                role === 'slider' ||
                role === 'progressbar'
                    ? additionalAriaAttributes?.valuetext
                    : undefined
            }
        />
    )
}

export default WCAGH37
