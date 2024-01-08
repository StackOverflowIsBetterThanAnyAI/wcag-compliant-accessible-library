import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    role:
        | 'banner'
        | 'complementary'
        | 'contentinfo'
        | 'form'
        | 'main'
        | 'navigation'
        | 'region'
        | 'search'
    additionalStyling?: CSSProperties
    ariaLabel?: string
    ariaLabelledById?: string
    children: ReactNode
    className?: string
}

const WCAGARIA11: React.FC<Props> = ({
    ariaLabel,
    ariaLabelledById,
    additionalStyling,
    className,
    role,
    children,
}) => {
    return (
        <>
            {role === 'search' ? (
                <form
                    role={role}
                    aria-label={ariaLabel}
                    aria-labelledby={ariaLabelledById}
                    style={{ ...additionalStyling }}
                    className={className}
                >
                    {children}
                </form>
            ) : (
                <div
                    role={role}
                    aria-label={ariaLabel}
                    aria-labelledby={ariaLabelledById}
                    style={{ ...additionalStyling }}
                    className={className}
                >
                    {children}
                </div>
            )}
        </>
    )
}

export default WCAGARIA11
