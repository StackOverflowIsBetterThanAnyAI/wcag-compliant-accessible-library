import React, { ReactNode } from 'react'

interface NonTextContentProps {
    altText: string
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }
    link: string
    children: ReactNode
}

const WCAGNonTextContentH2: React.FC<NonTextContentProps> = ({
    altText,
    imageData,
    link,
    children,
}) => {
    return (
        <a href={link}>
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
            {children}
        </a>
    )
}

export default WCAGNonTextContentH2
