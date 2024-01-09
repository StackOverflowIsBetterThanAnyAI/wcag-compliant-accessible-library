import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG115H49Props {
    additionalStyling?: CSSProperties
    cite?: string
    className?: string
    children: ReactNode
}

const G115H49ShortQuote: React.FC<WCAGG115H49Props> = ({
    additionalStyling,
    cite,
    className,
    children,
}) => {
    return (
        <q className={className} cite={cite} style={{ ...additionalStyling }}>
            {children}
        </q>
    )
}

export default G115H49ShortQuote
