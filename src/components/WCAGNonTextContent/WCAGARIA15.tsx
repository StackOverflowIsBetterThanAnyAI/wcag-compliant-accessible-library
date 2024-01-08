import React from 'react'

interface Props {
    accessibleIds: string
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

const WCAGARIA15: React.FC<Props> = ({
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
            loading={imageData?.loading}
            style={{
                height: imageData?.height,
                width: imageData?.width,
                ...imageData?.additionalStyling,
            }}
        />
    )
}

export default WCAGARIA15
