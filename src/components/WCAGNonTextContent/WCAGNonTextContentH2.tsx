import React from 'react'

interface NonTextContentProps {
    altText: string
    imageData: {
        imageSource: string
        additionalStyling?: React.CSSProperties
    }
    link: string
    textContent: string
}

const WCAGNonTextContentG196: React.FC<NonTextContentProps> = ({
    altText,
    imageData,
    link,
    textContent,
}) => {
    return (
        <a href={link}>
            <img
                src={imageData.imageSource}
                alt={altText}
                style={{ ...imageData?.additionalStyling }}
            />
            {textContent}
        </a>
    )
}

export default WCAGNonTextContentG196
