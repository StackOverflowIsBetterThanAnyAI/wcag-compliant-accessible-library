import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'

interface WCAGH37Props {
    altText: string
    className?: string
    imageData: ImageAttributes
    role?:
        | 'button'
        | 'checkbox'
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
    altText,
    className,
    imageData,
    role,
}) => {
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
        />
    )
}

export default WCAGH37
