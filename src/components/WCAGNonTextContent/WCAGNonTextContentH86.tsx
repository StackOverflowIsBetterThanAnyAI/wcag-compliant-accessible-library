import React, { CSSProperties, ReactNode } from 'react'

interface NonTextContentProps {
    accessibleText: string
    additionalStyling?: CSSProperties
    descriptionText?: string
    element: 'span' | 'div' | 'abbr' | 'skip'
    originalText: ReactNode
    role?: 'img'
    skipId?: string
    children?: ReactNode
}

const WCAGNonTextContentH86: React.FC<NonTextContentProps> = ({
    accessibleText,
    additionalStyling,
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
                >
                    {originalText}
                </div>
            )
        case 'abbr':
            return <abbr title={accessibleText}>{originalText}</abbr>
        case 'skip':
            return (
                <>
                    <figure>
                        <figcaption>
                            <p>
                                {descriptionText}
                                <div>
                                    <a href={`#${skipId}`}>{accessibleText}</a>
                                </div>
                            </p>
                        </figcaption>
                        {originalText}
                    </figure>
                    <p id={skipId} style={{ ...additionalStyling }}>
                        {children}
                    </p>
                </>
            )
    }
}

export default WCAGNonTextContentH86
