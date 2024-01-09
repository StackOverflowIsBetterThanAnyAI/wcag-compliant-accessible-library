import React, { ReactNode } from 'react'

interface WCAGG74Props {
    accessibleId: string
    additionalStyling?: React.CSSProperties
    className?: string
    children: ReactNode
}

const WCAGG74Text: React.FC<WCAGG74Props> = ({
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
