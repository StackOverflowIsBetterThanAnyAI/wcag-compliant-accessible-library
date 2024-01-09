import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG115H49Props {
    additionalStyling?: CSSProperties
    linkData: {
        download?: string
        href: string
        hreflang?: string
        ping?: string
        referrerpolicy?: React.HTMLAttributeReferrerPolicy
        target?: React.HTMLAttributeAnchorTarget
        type?: string
    }
    className?: string
    children: ReactNode
}

const G115H49A: React.FC<WCAGG115H49Props> = ({
    additionalStyling,
    className,
    linkData,
    children,
}) => {
    return (
        <a
            href={linkData.href}
            download={linkData?.download}
            hrefLang={linkData?.hreflang}
            ping={linkData?.ping}
            referrerPolicy={linkData?.referrerpolicy}
            target={linkData?.target}
            type={linkData?.type}
            className={className}
            style={{ ...additionalStyling }}
        >
            {children}
        </a>
    )
}

export default G115H49A
