import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49Sub: React.FC<Props> = ({
    additionalStyling,
    className,
    children,
}) => {
    return (
        <sub className={className} style={{ ...additionalStyling }}>
            {children}
        </sub>
    )
}

export default G115H49Sub
