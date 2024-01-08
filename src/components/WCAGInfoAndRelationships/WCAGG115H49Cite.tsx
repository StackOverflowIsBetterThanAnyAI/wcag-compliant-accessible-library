import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49Cite: React.FC<Props> = ({
    additionalStyling,
    className,
    children,
}) => {
    return (
        <cite className={className} style={{ ...additionalStyling }}>
            {children}
        </cite>
    )
}

export default G115H49Cite
