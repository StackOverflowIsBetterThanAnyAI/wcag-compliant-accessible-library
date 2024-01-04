import React, { CSSProperties, ReactNode } from 'react'

interface NonTextContentProps {
    accessibleId: string
    additionalStyling?: CSSProperties
    children: ReactNode
}

const WCAGNonTextContentARIA15Text: React.FC<NonTextContentProps> = ({
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

export default WCAGNonTextContentARIA15Text
