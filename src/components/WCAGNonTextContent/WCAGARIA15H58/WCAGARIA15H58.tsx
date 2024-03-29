import React from 'react'
import { ImageAttributes } from '../../../interfaces/ImageAttributes'
import { WAIARIAAttributes } from '../../../interfaces/WAIARIAAttributes'

interface WCAGARIA15H58Props {
    accessibleIds: string
    imageData: (ImageAttributes & {
        altText: string
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
            | 'describedby'
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
    })[]
    className?: string
}

const WCAGARIA15H58: React.FC<WCAGARIA15H58Props> = ({
    accessibleIds,
    className,
    imageData,
}) => {
    const errors: string[] = []

    // checks if accessibleIds is an empty string
    if (accessibleIds.trim().length < 1) {
        errors.push(
            'Your accessibleIds attribute hast to have a length of at least one character!'
        )
    }

    // checks if altText is an empty string
    imageData.forEach((data, dataIndex) => {
        if (data.altText.trim().length < 1) {
            errors.push(
                `Your altText attribute in imageData[${dataIndex}] has to have a length of at least one character!`
            )
        }
    })

    // checks if imageSource is an empty string
    imageData.forEach((data, dataIndex) => {
        if (data.imageSource.trim().length < 1) {
            errors.push(
                `Your imageSource attribute in imageData[${dataIndex}] has to have a length of at least one character!`
            )
        }
    })

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

    return (
        <>
            {imageData.map((data, dataIndex) => (
                <img
                    key={dataIndex}
                    src={data.imageSource}
                    alt={data.altText}
                    aria-describedby={accessibleIds}
                    className={className}
                    role={data?.role}
                    crossOrigin={data?.crossorigin}
                    decoding={data?.decoding}
                    loading={data?.loading}
                    referrerPolicy={data?.referrerpolicy}
                    style={{
                        height: data?.height,
                        width: data?.width,
                        ...data?.additionalStyling,
                    }}
                    aria-atomic={data?.additionalAriaAttributes?.atomic}
                    aria-busy={data?.additionalAriaAttributes?.busy}
                    aria-checked={
                        data?.role === 'checkbox' ||
                        data?.role === 'menuitemcheckbox' ||
                        data?.role === 'menuitemradio' ||
                        data?.role === 'option' ||
                        data?.role === 'switch'
                            ? data?.additionalAriaAttributes?.checked
                            : undefined
                    }
                    aria-controls={data?.additionalAriaAttributes?.controls}
                    aria-current={data?.additionalAriaAttributes?.current}
                    aria-description={
                        data?.additionalAriaAttributes?.description
                    }
                    aria-details={data?.additionalAriaAttributes?.details}
                    aria-disabled={
                        data?.role === 'button' ||
                        data?.role === 'link' ||
                        data?.role === 'menuitem' ||
                        data?.role === 'scrollbar' ||
                        data?.role === 'separator' ||
                        data?.role === 'tab' ||
                        data?.role === 'checkbox' ||
                        data?.role === 'menuitemcheckbox' ||
                        data?.role === 'menuitemradio' ||
                        data?.role === 'option' ||
                        data?.role === 'slider' ||
                        data?.role === 'switch'
                            ? data?.additionalAriaAttributes?.disabled
                            : undefined
                    }
                    aria-errormessage={
                        data?.role === 'checkbox' ||
                        data?.role === 'slider' ||
                        data?.role === 'switch'
                            ? data?.additionalAriaAttributes?.errormessage
                            : undefined
                    }
                    aria-expanded={
                        data?.role === 'button' ||
                        data?.role === 'checkbox' ||
                        data?.role === 'link' ||
                        data?.role === 'menuitem' ||
                        data?.role === 'tab' ||
                        data?.role === 'menuitemcheckbox' ||
                        data?.role === 'menuitemradio' ||
                        data?.role === 'switch'
                            ? data?.additionalAriaAttributes?.expanded
                            : undefined
                    }
                    aria-flowto={data?.additionalAriaAttributes?.flowto}
                    aria-haspopup={
                        data?.role === 'button' ||
                        data?.role === 'link' ||
                        data?.role === 'menuitem' ||
                        data?.role === 'slider' ||
                        data?.role === 'tab' ||
                        data?.role === 'menuitemcheckbox' ||
                        data?.role === 'menuitemradio'
                            ? data?.additionalAriaAttributes?.haspopup
                            : undefined
                    }
                    aria-hidden={data?.additionalAriaAttributes?.hidden}
                    aria-invalid={
                        data?.role === 'checkbox' ||
                        data?.role === 'slider' ||
                        data?.role === 'switch'
                            ? data?.additionalAriaAttributes?.invalid
                            : undefined
                    }
                    aria-keyshortcuts={
                        data?.additionalAriaAttributes?.keyshortcuts
                    }
                    aria-live={data?.additionalAriaAttributes?.live}
                    aria-orientation={
                        data?.role === 'scrollbar' ||
                        data?.role === 'separator' ||
                        data?.role === 'slider'
                            ? data?.additionalAriaAttributes?.orientation
                            : undefined
                    }
                    aria-owns={data?.additionalAriaAttributes?.owns}
                    aria-posinset={
                        data?.role === 'menuitem' ||
                        data?.role === 'option' ||
                        data?.role === 'tab' ||
                        data?.role === 'menuitemcheckbox' ||
                        data?.role === 'menuitemradio'
                            ? data?.additionalAriaAttributes?.posinset
                            : undefined
                    }
                    aria-pressed={
                        data?.role === 'button'
                            ? data?.additionalAriaAttributes?.pressed
                            : undefined
                    }
                    aria-readonly={
                        data?.role === 'checkbox' ||
                        data?.role === 'slider' ||
                        data?.role === 'switch'
                            ? data?.additionalAriaAttributes?.readonly
                            : undefined
                    }
                    aria-relevant={data?.additionalAriaAttributes?.relevant}
                    aria-required={
                        data?.role === 'checkbox' || data?.role === 'switch'
                            ? data?.additionalAriaAttributes?.required
                            : undefined
                    }
                    aria-roledescription={
                        data?.additionalAriaAttributes?.roledescription
                    }
                    aria-selected={
                        data?.role === 'option'
                            ? data?.additionalAriaAttributes?.selected
                            : undefined
                    }
                    aria-setsize={
                        data?.role === 'menuitem' ||
                        data?.role === 'option' ||
                        data?.role === 'tab' ||
                        data?.role == 'menuitemcheckbox' ||
                        data?.role === 'menuitemradio'
                            ? data?.additionalAriaAttributes?.setsize
                            : undefined
                    }
                    aria-valuemax={
                        data?.role === 'scrollbar' ||
                        data?.role === 'separator' ||
                        data?.role === 'slider' ||
                        data?.role === 'progressbar'
                            ? data?.additionalAriaAttributes?.valuemax
                            : undefined
                    }
                    aria-valuemin={
                        data?.role === 'scrollbar' ||
                        data?.role === 'separator' ||
                        data?.role === 'slider' ||
                        data?.role === 'progressbar'
                            ? data?.additionalAriaAttributes?.valuemin
                            : undefined
                    }
                    aria-valuenow={
                        data?.role === 'scrollbar' ||
                        data?.role === 'separator' ||
                        data?.role === 'slider' ||
                        data?.role === 'progressbar'
                            ? data?.additionalAriaAttributes?.valuenow
                            : undefined
                    }
                    aria-valuetext={
                        data?.role === 'scrollbar' ||
                        data?.role === 'separator' ||
                        data?.role === 'slider' ||
                        data?.role === 'progressbar'
                            ? data?.additionalAriaAttributes?.valuetext
                            : undefined
                    }
                />
            ))}
        </>
    )
}

export default WCAGARIA15H58
