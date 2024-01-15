import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'

interface WCAGH37Props {
    altText: string
    className?: string
    imageData: ImageAttributes
}

const WCAGH37: React.FC<WCAGH37Props> = ({ altText, className, imageData }) => {
    return (
        <img
            src={imageData.imageSource}
            alt={altText}
            className={className}
            crossOrigin={imageData?.crossorigin}
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
