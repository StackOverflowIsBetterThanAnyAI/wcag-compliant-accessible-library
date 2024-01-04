import React, { CSSProperties, ReactNode } from 'react'

interface NonTextContentProps {
    additionalStyling?: CSSProperties
    ariaLabelledById: string
    children: ReactNode
}

const WCAGNonTextContentARIA10Text: React.FC<NonTextContentProps> = ({
    ariaLabelledById,
    additionalStyling,
    children,
}) => {
    return (
        <div id={ariaLabelledById} style={{ ...additionalStyling }}>
            {children}
        </div>
    )
}

export default WCAGNonTextContentARIA10Text
