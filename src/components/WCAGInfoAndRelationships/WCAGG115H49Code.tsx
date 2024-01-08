import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    additionalStyling?: CSSProperties
    className?: string
    children: ReactNode
}

const G115H49Code: React.FC<Props> = ({
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
