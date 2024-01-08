import React, { ReactNode } from 'react'

interface Props {
    accessibleId: string
    additionalStyling?: React.CSSProperties
    className?: string
    children: ReactNode
}

const WCAGG74Text: React.FC<Props> = ({
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

export default WCAGG74Text
