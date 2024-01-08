import React from 'react'

interface NonTextContentProps {
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }
}

const WCAGNonTextContentH67: React.FC<NonTextContentProps> = ({
    imageData,
}) => {
    return (
        <img
            src={imageData.imageSource}
            alt=""
            loading={imageData?.loading}
            style={{
                height: imageData?.height,
                width: imageData?.width,
                ...imageData?.additionalStyling,
            }}
        />
    )
}

export default WCAGNonTextContentH67
