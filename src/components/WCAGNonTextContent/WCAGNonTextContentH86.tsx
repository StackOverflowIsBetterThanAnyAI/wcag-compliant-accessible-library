import React, { ReactNode } from 'react'

interface NonTextContentProps {
    accessibleText: string
    descriptionText?: string
    element: 'span' | 'div' | 'abbr' | 'skip'
    originalText: ReactNode
    role?: 'img'
    skipId?: string
    children?: ReactNode
}

const WCAGNonTextContentH86: React.FC<NonTextContentProps> = ({
    accessibleText,
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
                <span aria-label={accessibleText} role={role}>
                    {originalText}
                </span>
            )
        case 'div':
            return (
                <div aria-label={accessibleText} role={role}>
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
                    <p id={skipId}>{children}</p>
                </>
            )
    }
}

export default WCAGNonTextContentH86
