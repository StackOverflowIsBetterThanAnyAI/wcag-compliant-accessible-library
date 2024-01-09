import React, { CSSProperties, ReactNode } from 'react'

interface WCAGARIA10Props {
    additionalStyling?: CSSProperties
    ariaLabelledById: string
    className?: string
    children: ReactNode
}

const WCAGARIA10Text: React.FC<WCAGARIA10Props> = ({
    ariaLabelledById,
    additionalStyling,
    className,
    children,
}) => {
    return (
        <div
            id={ariaLabelledById}
            style={{ ...additionalStyling }}
            className={className}
        >
            {children}
        </div>
    )
}

export default WCAGARIA10Text
