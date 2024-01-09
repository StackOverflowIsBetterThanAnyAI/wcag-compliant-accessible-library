import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG115H49Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49Sup: React.FC<WCAGG115H49Props> = ({
    additionalStyling,
    className,
    children,
}) => {
    return (
        <sup className={className} style={{ ...additionalStyling }}>
            {children}
        </sup>
    )
}

export default G115H49Sup
