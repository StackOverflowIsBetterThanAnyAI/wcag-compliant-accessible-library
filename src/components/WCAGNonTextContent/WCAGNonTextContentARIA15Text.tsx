import React, { ReactNode } from 'react'

interface NonTextContentProps {
    accessibleId: string
    children: ReactNode
}

const WCAGNonTextContentARIA15Text: React.FC<NonTextContentProps> = ({
    accessibleId,
    children,
}) => {
    return <p id={accessibleId}>{children}</p>
}

export default WCAGNonTextContentARIA15Text
