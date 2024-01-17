import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'

interface WCAGARIA15Props {
    accessibleIds: string
    className?: string
    imageData: (ImageAttributes & { altText: string } & {
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
    } & {
        additionalAriaAttributes?: Omit<
            WAIARIAAttributes,
            | 'label'
            | 'labelledby'
            | 'activedescendant'
            | 'autocomplete'
            | 'colcount'
            | 'colindex'
            | 'colindextext'
            | 'colspan'
            | 'describedby'
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
}

const WCAGARIA15: React.FC<WCAGARIA15Props> = ({
    accessibleIds,
    className,
    imageData,
}) => {
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
                    aria-braillelabel={
                        data?.additionalAriaAttributes?.braillelabel
                    }
                    aria-brailleroledescription={
                        data?.additionalAriaAttributes?.brailleroledescription
                    }
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

export default WCAGARIA15
