import React, { CSSProperties, ReactNode } from 'react'

interface WCAGG117H97H101Props {
    additionalStyling?: CSSProperties
    ariaLabel?: string
    ariaLabelledById?: string
    className?: string
    listData: {
        displayedName: ReactNode
        href: string
        referrerpolicy?: React.HTMLAttributeReferrerPolicy
        target?: '_blank' | '_parent' | '_self' | '_top'
        new?: boolean
    }[]
    headline?: string
    children?: ReactNode
}

const WCAGG117H97H101: React.FC<WCAGG117H97H101Props> = ({
    ariaLabel,
    ariaLabelledById,
    additionalStyling,
    className,
    headline,
    listData,
    children,
}) => {
    return (
        <nav
            aria-labelledby={ariaLabelledById}
            aria-label={ariaLabel}
            style={{ ...additionalStyling }}
            className={className}
        >
            {ariaLabelledById && headline && (
                <h2 id={ariaLabelledById}>{headline}</h2>
            )}
            <ul>
                {listData?.map((data, index) => (
                    <li key={index}>
                        <a
                            href={data.href}
                            referrerPolicy={data?.referrerpolicy}
                            target={data?.target}
                        >
                            {data?.new ? (
                                <strong>{data.displayedName}</strong>
                            ) : (
                                data.displayedName
                            )}
                        </a>
                    </li>
                ))}
                {listData.length === 0 && children}
            </ul>
        </nav>
    )
}

export default WCAGG117H97H101
