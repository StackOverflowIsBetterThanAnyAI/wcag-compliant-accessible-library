import React, { ReactNode } from 'react'

interface NonTextContentProps {
    accessibleId: string
    additionalStyling?: React.CSSProperties
    children: ReactNode
}

const WCAGNonTextContentG74Text: React.FC<NonTextContentProps> = ({
    accessibleId,
    additionalStyling,
    children,
}) => {
    return (
        <p id={accessibleId} style={{ ...additionalStyling }}>
            {children}
        </p>
    )
}

export default WCAGNonTextContentG74Text
