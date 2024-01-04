import React, { ReactNode } from 'react'

interface NonTextContentProps {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    childId: string
    externalLink?: boolean
    ownId: string
    shortText?: ReactNode
    children: ReactNode
}

const WCAGNonTextContentG73: React.FC<NonTextContentProps> = ({
    additionalStyling,
    buttonText,
    childId,
    externalLink = false,
    ownId,
    shortText,
    children,
}) => {
    return (
        <div
            id={ownId}
            aria-describedby={childId}
            style={{ ...additionalStyling }}
        >
            {children}
            <a href={externalLink ? childId : `#${childId}`}>{buttonText}</a>
            {shortText}
        </div>
    )
}

export default WCAGNonTextContentG73
