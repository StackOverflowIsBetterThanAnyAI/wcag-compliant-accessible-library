import React, { CSSProperties, ReactNode } from 'react'

interface WCAGH86Props {
    accessibleText: string
    additionalStyling?: CSSProperties
    className?: string
    descriptionText?: string
    element: 'span' | 'div' | 'abbr' | 'skip'
    originalText: ReactNode
    role?: 'img'
    skipId?: string
    children?: ReactNode
}

const WCAGH86: React.FC<WCAGH86Props> = ({
    accessibleText,
    additionalStyling,
    className,
    descriptionText,
    element,
    originalText,
    role,
    skipId,
    children,
}) => {
    switch (element) {
        case 'span':
            return (
                <span
                    aria-label={accessibleText}
                    role={role}
                    style={{ ...additionalStyling }}
                    className={className}
                >
                    {originalText}
                </span>
            )
        case 'div':
            return (
                <div
                    aria-label={accessibleText}
                    role={role}
                    style={{ ...additionalStyling }}
                    className={className}
                >
                    {originalText}
                </div>
            )
        case 'abbr':
            return (
                <abbr title={accessibleText} className={className}>
                    {originalText}
                </abbr>
            )
        case 'skip':
            return (
                <>
                    <figure>
                        <figcaption>
                            <p>
                                {descriptionText}
                                <span>
                                    <a href={`#${skipId}`}>{accessibleText}</a>
                                </span>
                            </p>
                        </figcaption>
                        {originalText}
                    </figure>
                    <p
                        id={skipId}
                        style={{ ...additionalStyling }}
                        className={className}
                    >
                        {children}
                    </p>
                </>
            )
    }
}

export default WCAGH86
