import React, { CSSProperties, ReactNode } from 'react'

interface WCAGH2Props {
    additionalStyling?: CSSProperties
    altText?: string // It may only be missing if the text of the anchor can clearly describe the link
    classNameLink?: string
    classNameImage?: string
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
    classNameImage,
    classNameLink,
    imageData,
    link,
    textBeforeImage = false,
    children,
}) => {
    return (
        <a
            href={link}
            style={{ ...additionalStyling }}
            className={classNameLink}
        >
            {textBeforeImage && children}
            <img
                src={imageData.imageSource}
                alt={altText ?? ''}
                className={classNameImage}
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
