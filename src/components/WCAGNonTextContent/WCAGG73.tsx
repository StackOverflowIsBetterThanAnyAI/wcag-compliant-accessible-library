import React, { ReactNode } from 'react'

interface WCAGG73Props {
    additionalStyling?: React.CSSProperties
    buttonText: ReactNode
    childId: string
    classNameDiv?: string
    classNameLink?: string
    externalLink?: boolean
    ownId: string
    shortText?: ReactNode
    children: ReactNode
}

const WCAGG73: React.FC<WCAGG73Props> = ({
    additionalStyling,
    buttonText,
    childId,
    classNameDiv,
    classNameLink,
    externalLink = false,
    ownId,
    shortText,
    children,
}) => {
    return (
        <div
            id={ownId}
            aria-describedby={childId}
            style={{ ...additionalStyling }}
            className={classNameDiv}
        >
            {children}
            <a
                href={externalLink ? childId : `#${childId}`}
                className={classNameLink}
            >
                {buttonText}
            </a>
            {shortText}
        </div>
    )
}

export default WCAGG73
