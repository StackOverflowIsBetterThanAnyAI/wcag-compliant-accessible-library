import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG115H49Props {
    additionalStyling?: CSSProperties
    cite?: string
    className?: string
    children: ReactNode
}

const G115H49Quote: React.FC<WCAGG115H49Props> = ({
    additionalStyling,
    cite,
    className,
    children,
}) => {
    return (
        <blockquote
            cite={cite}
            className={className}
            style={{ ...additionalStyling }}
        >
            {children}
        </blockquote>
    )
}

export default G115H49Quote
