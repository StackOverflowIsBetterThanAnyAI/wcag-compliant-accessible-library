import React, { ReactNode } from 'react'

interface NonTextContentProps {
    altText?: string // It may only be missing if the text of the anchor can clearly describe the link
    imageData?: {
        imageSource: string
        loading?: 'eager' | 'lazy'
        height?: number | string
        width?: number | string
        additionalStyling?: React.CSSProperties
    }
    link: string
    postImageText?: ReactNode
    preImageText?: ReactNode
}

const WCAGNonTextContentH30: React.FC<NonTextContentProps> = ({
    altText,
    link,
    imageData,
    postImageText,
    preImageText,
}) => {
    return (
        <a href={link}>
            {preImageText}
            <img
                src={imageData?.imageSource}
                alt={altText}
                loading={imageData?.loading}
                style={{
                    height: imageData?.height,
                    width: imageData?.width,
                    ...imageData?.additionalStyling,
                }}
            />
            {postImageText}
        </a>
    )
}

export default WCAGNonTextContentH30
