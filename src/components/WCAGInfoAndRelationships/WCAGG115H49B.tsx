import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG115H49Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49B: React.FC<WCAGG115H49Props> = ({
    additionalStyling,
    className,
    children,
}) => {
    return (
        <b className={className} style={{ ...additionalStyling }}>
            {children}
        </b>
    )
}

export default G115H49B
