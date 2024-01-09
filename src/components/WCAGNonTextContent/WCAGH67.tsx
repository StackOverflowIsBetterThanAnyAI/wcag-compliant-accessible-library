import React from 'react'

interface WCAGH67Props {
    className?: string
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }
}

const WCAGH67: React.FC<WCAGH67Props> = ({ className, imageData }) => {
    return (
        <img
            src={imageData.imageSource}
            alt=""
            className={className}
            loading={imageData?.loading}
            style={{
                height: imageData?.height,
                width: imageData?.width,
                ...imageData?.additionalStyling,
            }}
        />
    )
}

export default WCAGH67
