import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'

interface WCAGARIA15Props {
    accessibleIds: string
    altText: string
    className?: string
    imageData: ImageAttributes
}

const WCAGARIA15: React.FC<WCAGARIA15Props> = ({
    accessibleIds,
    altText,
    className,
    imageData,
}) => {
    return (
        <img
            src={imageData.imageSource}
            alt={altText}
            aria-describedby={accessibleIds}
            className={className}
            crossOrigin={imageData?.crossorigin}
            loading={imageData?.loading}
            referrerPolicy={imageData?.referrerpolicy}
            style={{
                height: imageData?.height,
                width: imageData?.width,
                ...imageData?.additionalStyling,
            }}
        />
    )
}

export default WCAGARIA15
