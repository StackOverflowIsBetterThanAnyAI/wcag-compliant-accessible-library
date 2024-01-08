import React, { ReactNode } from 'react'

interface Props {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    childId: string
    className?: string
    externalLink?: boolean
    ownId: string
    shortText?: ReactNode
    children: ReactNode
}

const WCAGG73: React.FC<Props> = ({
    additionalStyling,
    buttonText,
    childId,
    className,
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
            className={className}
        >
            {children}
            <a href={externalLink ? childId : `#${childId}`}>{buttonText}</a>
            {shortText}
        </div>
    )
}

export default WCAGG73
