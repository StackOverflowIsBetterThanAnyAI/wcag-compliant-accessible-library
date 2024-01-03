import React from 'react'

interface NonTextContentProps {
    altText: string
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }[]
}

const WCAGNonTextContentG196: React.FC<NonTextContentProps> = ({
    altText,
    imageData,
}) => {
    return (
        <>
            {imageData.map((data, index) => (
                <img
                    key={index}
                    src={data.imageSource}
                    alt={index === 0 ? altText : ''}
                    loading={data?.loading}
                    style={{
                        height: data?.height,
                        width: data?.width,
                        ...data?.additionalStyling,
                    }}
                />
            ))}
        </>
    )
}

export default WCAGNonTextContentG196
