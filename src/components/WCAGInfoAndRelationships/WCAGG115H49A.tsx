import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG115H49Props {
    additionalStyling?: CSSProperties
    linkData: {
        disabled?: boolean
        download?: string
        href: string
        hreflang?: string
        ping?: string
        referrerpolicy?: React.HTMLAttributeReferrerPolicy
        target?: '_blank' | '_parent' | '_self' | '_top'
        type?: string
    }
    onClickFunction?: () => void
    className?: string
    children: ReactNode
}

const G115H49A: React.FC<WCAGG115H49Props> = ({
    additionalStyling,
    className,
    linkData,
    onClickFunction,
    children,
}) => {
    return (
        <a
            href={linkData?.disabled ? undefined : linkData.href}
            onClick={() => onClickFunction && onClickFunction()}
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
