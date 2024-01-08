import React, { ReactNode } from 'react'

interface Props {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    className?: string
    externalLink?: string
    ownId: string
    parentId: string
    children: ReactNode
}

const WCAGG73Text: React.FC<Props> = ({
    additionalStyling,
    buttonText,
    className,
    externalLink = false,
    ownId,
    parentId,
    children,
}) => {
    return (
        <p id={ownId} style={{ ...additionalStyling }} className={className}>
            {children}
            <p>
                <a href={externalLink ? parentId : `#${parentId}`}>
                    {buttonText}
                </a>
            </p>
        </p>
    )
}

export default WCAGG73Text
