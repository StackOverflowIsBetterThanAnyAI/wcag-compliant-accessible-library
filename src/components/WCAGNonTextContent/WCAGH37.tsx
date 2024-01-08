import React from 'react'

interface Props {
    altText: string
    className?: string
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }
}

const WCAGH37: React.FC<Props> = ({ altText, className, imageData }) => {
    return (
        <img
            src={imageData.imageSource}
            alt={altText}
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

export default WCAGH37
