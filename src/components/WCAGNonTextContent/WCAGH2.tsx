import React, { CSSProperties, ReactNode } from 'react'

interface WCAGH2Props {
    additionalStyling?: CSSProperties
    altText?: string // It may only be missing if the text of the anchor can clearly describe the link
    className?: string
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

const WCAGH2: React.FC<WCAGH2Props> = ({
    additionalStyling,
    altText,
    className,
    imageData,
    link,
    textBeforeImage = false,
    children,
}) => {
    return (
        <a href={link} style={{ ...additionalStyling }} className={className}>
            {textBeforeImage && children}
            <img
                src={imageData.imageSource}
                alt={altText ?? ''}
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

export default WCAGH2
