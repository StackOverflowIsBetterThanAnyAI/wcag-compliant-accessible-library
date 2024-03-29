import React from 'react'
import { ImageAttributes } from '../../../interfaces/ImageAttributes'
import { AreaAttributes } from '../../../interfaces/AreaAttributes'
import { WAIARIAAttributes } from '../../../interfaces/WAIARIAAttributes'

interface WCAGH24Props {
    areaData: (AreaAttributes & {
        onClickFunction?: () => void
        onFocusFunction?: () => void
        onHoverFunction?: () => void
    })[]
    imageData: ImageAttributes & { altText: string }
    mapName: string
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
    classNameMap?: string
    role?:
        | 'button' // should be avoided
        | 'checkbox' // should be avoided
        | 'doc-cover'
        | 'link' // should be avoided
        | 'menuitem' // should be avoided
        | 'menuitemcheckbox' // should be avoided
        | 'menuitemradio' // should be avoided
        | 'option' // should be avoided
        | 'progressbar' // should be avoided
        | 'scrollbar'
        | 'separator' // should be avoided
        | 'slider'
        | 'switch'
        | 'tab'
        | 'treeitem'
}

const WCAGH24: React.FC<WCAGH24Props> = ({
    additionalAriaAttributes,
    areaData,
    classNameImage,
    classNameMap,
    imageData,
    role,
    mapName,
}) => {
    const errors: string[] = []

    // checks if mapName is an empty string
    if (mapName.trim().length < 1) {
        errors.push(
            'Your mapName attribute hast to have a length of at least one character!'
        )
    }

    // checks if altText is an empty string
    if (imageData.altText.trim().length < 1) {
        errors.push(
            'Your imageData.altText attribute hast to have a length of at least one character!'
        )
    }

    // checks if imageSource is an empty string
    if (imageData.imageSource.trim().length < 1) {
        errors.push(
            'Your imageData.imageSource attribute hast to have a length of at least one character!'
        )
    }

    // checks if coords is an empty string
    areaData.forEach((data, dataIndex) => {
        if (data.coords.trim().length < 1) {
            errors.push(
                `Your coords attribute in areaData[${dataIndex}] has to have a length of at least one character!`
            )
        }
    })

    // checks if either an altText or hollow is set
    areaData.forEach((data, dataIndex) => {
        if (!data.hollow && !data.altText) {
            errors.push(
                `You have to either set an altText in areaData[${dataIndex}] or mark this area as hollow!`
            )
        }
    })

    // checks if either an href or hollow is set
    areaData.forEach((data, dataIndex) => {
        if (!data.hollow && !data.href) {
            errors.push(
                `You have to either set an href in areaData[${dataIndex}] or mark this area as hollow!`
            )
        }
    })

    // checks if either an altText and/or href and hollow are set at the same time
    areaData.forEach((data, dataIndex) => {
        if (data.hollow && (data.href || data.altText)) {
            console.warn(
                `Your href or altText have no affect in areaData[${dataIndex}] as it is marked as hollow!`
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
            <img
                alt={imageData.altText}
                role={role}
                className={classNameImage}
                src={imageData.imageSource}
                crossOrigin={imageData?.crossorigin}
                decoding={imageData?.decoding}
                loading={imageData?.loading}
                referrerPolicy={imageData?.referrerpolicy}
                useMap={`#${mapName}`}
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
                    role === 'checkbox' ||
                    role === 'slider' ||
                    role === 'switch'
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
                    role === 'checkbox' ||
                    role === 'slider' ||
                    role === 'switch'
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
                    role === 'checkbox' ||
                    role === 'slider' ||
                    role === 'switch'
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
            <map name={mapName} className={classNameMap}>
                {areaData?.map((data, dataIndex) => (
                    <area
                        key={dataIndex}
                        alt={data?.hollow ? '' : data?.altText}
                        onClick={() =>
                            data?.onClickFunction && data.onClickFunction()
                        }
                        onFocus={() =>
                            data?.onFocusFunction && data?.onFocusFunction()
                        }
                        onMouseOver={() =>
                            data?.onHoverFunction && data?.onHoverFunction()
                        }
                        coords={data.coords}
                        download={data?.download}
                        referrerPolicy={data?.referrerpolicy}
                        rel={data?.rel}
                        href={data?.hollow ? undefined : data?.href}
                        hrefLang={data?.hreflang}
                        media={data?.media}
                        shape={data.shape}
                        style={{ ...data?.additionalStyling }}
                        target={data?.target}
                    />
                ))}
            </map>
        </>
    )
}

export default WCAGH24
