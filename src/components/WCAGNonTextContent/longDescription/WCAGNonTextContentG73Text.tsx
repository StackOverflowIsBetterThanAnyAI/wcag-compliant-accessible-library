import React, { ReactNode } from 'react'

interface NonTextContentProps {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    externalLink?: string
    ownId: string
    parentId: string
    children: ReactNode
}

const WCAGNonTextContentG73Text: React.FC<NonTextContentProps> = ({
    additionalStyling,
    buttonText,
    externalLink = false,
    ownId,
    parentId,
    children,
}) => {
    return (
        <p id={ownId} style={{ ...additionalStyling }}>
            {children}
            <p>
                <a href={externalLink ? parentId : `#${parentId}`}>
                    {buttonText}
                </a>
            </p>
        </p>
    )
}

export default WCAGNonTextContentG73Text
