import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49Strong: React.FC<Props> = ({
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
