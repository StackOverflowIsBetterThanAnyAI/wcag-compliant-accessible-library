import React from 'react'
import { ImageAttributes } from '../../interfaces/ImageAttributes'

interface WCAGH67Props {
    imageData: ImageAttributes
    className?: string
    role?: 'presentation'
}

const WCAGH67: React.FC<WCAGH67Props> = ({ className, imageData, role }) => {
    try {
        // empty image source
        if (imageData.imageSource.trim().length < 1) {
            throw new Error(
                'Your imageData.imageSource attribute hast to have a length of at least one character!'
            )
        }

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
    } catch (error: any) {
        console.error(error.message)
        return
    }
}

export default WCAGH67
