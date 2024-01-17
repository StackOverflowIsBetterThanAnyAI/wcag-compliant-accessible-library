import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'

interface WCAGH67Props {
    className?: string
    imageData: ImageAttributes
    role?: 'presentation'
}

const WCAGH67: React.FC<WCAGH67Props> = ({ className, imageData, role }) => {
    return (
        <img
            src={imageData.imageSource}
            alt=""
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

export default WCAGH67
