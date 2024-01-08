import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    accessibleId: string
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const WCAGARIA15Text: React.FC<Props> = ({
    accessibleId,
    additionalStyling,
    className,
    children,
}) => {
    return (
        <p
            id={accessibleId}
            style={{ ...additionalStyling }}
            className={className}
        >
            {children}
        </p>
    )
}

export default WCAGARIA15Text
