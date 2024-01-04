import React, { ReactNode } from 'react'

interface NonTextContentProps {
    altText?: string // It may only be missing if the text of the anchor can clearly describe the link
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }
    link: string
    textBeforeImage?: boolean
    children: ReactNode
}

const WCAGNonTextContentH2: React.FC<NonTextContentProps> = ({
    altText,
    imageData,
    link,
    textBeforeImage = false,
    children,
}) => {
    return (
        <a href={link}>
            {textBeforeImage && children}
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
            {!textBeforeImage && children}
        </a>
    )
}

export default WCAGNonTextContentH2
