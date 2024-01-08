import React from 'react'

interface NonTextContentProps {
    altText: string
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }
}

const WCAGNonTextContentH37: React.FC<NonTextContentProps> = ({
    altText,
    imageData,
}) => {
    return (
        <img
            src={imageData.imageSource}
            alt={altText}
            loading={imageData?.loading}
            style={{
                height: imageData?.height,
                width: imageData?.width,
                ...imageData?.additionalStyling,
            }}
        />
    )
}

export default WCAGNonTextContentH37
