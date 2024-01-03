import React from 'react'

interface NonTextContentProps {
    accessibleIds: string
    altText: string
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }
}

const WCAGNonTextContentARIA15: React.FC<NonTextContentProps> = ({
    accessibleIds,
    altText,
    imageData,
}) => {
    return (
        <img
            src={imageData.imageSource}
            alt={altText}
            aria-describedby={accessibleIds}
            loading={imageData?.loading}
            style={{
                height: imageData?.height,
                width: imageData?.width,
                ...imageData?.additionalStyling,
            }}
        />
    )
}

export default WCAGNonTextContentARIA15
