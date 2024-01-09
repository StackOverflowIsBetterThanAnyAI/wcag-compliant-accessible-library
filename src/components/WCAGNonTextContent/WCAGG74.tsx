import React, { ReactNode } from 'react'

interface WCAGG74Props {
    accessibleIds: string
    additionalStyling?: React.CSSProperties
    className?: string
    shortText: ReactNode
    children: ReactNode
}

const WCAGG74: React.FC<WCAGG74Props> = ({
    accessibleIds,
    additionalStyling,
    className,
    shortText,
    children,
}) => {
    return (
        <div
            aria-describedby={accessibleIds}
            style={{ ...additionalStyling }}
            className={className}
        >
            {children}
            {shortText}
        </div>
    )
}

export default WCAGG74
