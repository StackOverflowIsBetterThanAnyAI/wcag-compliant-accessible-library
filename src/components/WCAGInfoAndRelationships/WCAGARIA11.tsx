import React, { CSSProperties, ReactNode } from 'react'

interface WCAGARIA11Props {
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
    divData?: {
        accesskey?: string
        contenteditable?: boolean | 'inherit' | 'plaintext-only'
        dir?: string
        draggable?: boolean
        hidden?: boolean
        id?: string
        inputmode?:
            | 'email'
            | 'search'
            | 'none'
            | 'numeric'
            | 'text'
            | 'tel'
            | 'url'
            | 'decimal'
        lang?: string
        spellcheck?: boolean
        tabindex?: number
        title?: string
        translate?: 'yes' | 'no'
    }
    children: ReactNode
    className?: string
}

const WCAGARIA11: React.FC<WCAGARIA11Props> = ({
    ariaLabel,
    ariaLabelledById,
    additionalStyling,
    className,
    divData,
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
                    accessKey={divData?.accesskey}
                    contentEditable={divData?.contenteditable}
                    dir={divData?.dir}
                    draggable={divData?.draggable}
                    hidden={divData?.hidden}
                    id={divData?.id}
                    inputMode={divData?.inputmode}
                    lang={divData?.lang}
                    spellCheck={divData?.spellcheck}
                    tabIndex={divData?.tabindex}
                    title={divData?.title}
                    translate={divData?.translate}
                >
                    {children}
                </div>
            )}
        </>
    )
}

export default WCAGARIA11
