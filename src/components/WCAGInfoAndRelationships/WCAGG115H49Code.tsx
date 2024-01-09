import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG115H49Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49Code: React.FC<WCAGG115H49Props> = ({
    additionalStyling,
    className,
    children,
}) => {
    return (
        <code className={className} style={{ ...additionalStyling }}>
            {children}
        </code>
    )
}

export default G115H49Code
