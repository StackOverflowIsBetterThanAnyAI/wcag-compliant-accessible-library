import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49Em: React.FC<Props> = ({
    additionalStyling,
    className,
    children,
}) => {
    return (
        <em className={className} style={{ ...additionalStyling }}>
            {children}
        </em>
    )
}

export default G115H49Em
