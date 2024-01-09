import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG115H49Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49Strong: React.FC<WCAGG115H49Props> = ({
    additionalStyling,
    className,
    children,
}) => {
    return (
        <strong className={className} style={{ ...additionalStyling }}>
            {children}
        </strong>
    )
}

export default G115H49Strong
