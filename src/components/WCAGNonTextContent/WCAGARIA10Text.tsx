import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    additionalStyling?: CSSProperties
    ariaLabelledById: string
    className?: string
    children: ReactNode
}

const WCAGARIA10Text: React.FC<Props> = ({
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
