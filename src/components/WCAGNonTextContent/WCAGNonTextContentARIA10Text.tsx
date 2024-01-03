import React, { ReactNode } from 'react'

interface NonTextContentProps {
    ariaLabelledById: string
    children: ReactNode
}

const WCAGNonTextContentARIA10Text: React.FC<NonTextContentProps> = ({
    ariaLabelledById,
    children,
}) => {
    return <div id={ariaLabelledById}>{children}</div>
}

export default WCAGNonTextContentARIA10Text
