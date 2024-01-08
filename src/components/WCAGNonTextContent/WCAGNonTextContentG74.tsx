import React, { ReactNode } from 'react'

interface NonTextContentProps {
    accessibleIds: string
    additionalStyling?: React.CSSProperties
    shortText: ReactNode
    children: ReactNode
}

const WCAGNonTextContentG74: React.FC<NonTextContentProps> = ({
    accessibleIds,
    additionalStyling,
    shortText,
    children,
}) => {
    return (
        <div aria-describedby={accessibleIds} style={{ ...additionalStyling }}>
            {children}
            {shortText}
        </div>
    )
}

export default WCAGNonTextContentG74
