import React, { CSSProperties, ReactNode } from 'react'

interface Props {
    additionalStyling?: CSSProperties
    ariaLabel?: string
    ariaLabelledById?: string
    className?: string
    listData: {
        displayedName: ReactNode
        href: string
        referrerpolicy?: React.HTMLAttributeReferrerPolicy
        target?: React.HTMLAttributeAnchorTarget
    }[]
    headline?: string
    children?: ReactNode
}

const WCAGH101: React.FC<Props> = ({
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
                    <li>
                        <a
                            key={index}
                            href={data.href}
                            referrerPolicy={data?.referrerpolicy}
                            target={data?.target}
                        >
                            {data.displayedName}
                        </a>
                    </li>
                ))}
                {listData.length === 0 && children}
            </ul>
        </nav>
    )
}

export default WCAGH101
