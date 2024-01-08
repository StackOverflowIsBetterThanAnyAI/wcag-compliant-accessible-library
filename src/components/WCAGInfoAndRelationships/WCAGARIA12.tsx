import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    additionalStyling?: CSSProperties
    ariaLevel?: number
    children: ReactNode
    className?: string
}

const WCAGARIA12: React.FC<Props> = ({
    additionalStyling,
    ariaLevel,
    className,
    children,
}) => {
    return (
        <div
            role="heading"
            aria-level={ariaLevel}
            style={{ ...additionalStyling }}
            className={className}
        >
            {children}
        </div>
    )
}

export default WCAGARIA12
