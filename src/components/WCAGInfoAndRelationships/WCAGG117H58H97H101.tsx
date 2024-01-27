import React, { CSSProperties, ReactNode } from 'react'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'
import { LinkAttributes } from '../interfaces/LinkAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGG117H58H97H101Props {
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
        | 'checked'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'errormessage'
        | 'expanded'
        | 'haspopup'
        | 'invalid'
        | 'label'
        | 'labelledby'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'placeholder'
        | 'posinset'
        | 'pressed'
        | 'readonly'
        | 'required'
        | 'rowcount'
        | 'rowindex'
        | 'rowindextext'
        | 'rowspan'
        | 'selected'
        | 'setsize'
        | 'sort'
        | 'valuemax'
        | 'valuemin'
        | 'valuenow'
        | 'valuetext'
    >
    additionalStyling?: CSSProperties
    ariaLabel?: string
    ariaLabelledById?: string
    className?: string
    headline?: string
    listData?: (LinkAttributes & {
        displayedName: ReactNode
        href: string
        lang?: LangAttributes
        new?: boolean
        onClickFunction?: () => void
        onFocusFunction?: () => void
        onHoverFunction?: () => void
    })[]
    role?:
        | 'doc-index'
        | 'doc-pagelist'
        | 'doc-toc'
        | 'menu'
        | 'menubar'
        | 'presentation'
        | 'tablist'
    children?: ReactNode
}

const WCAGG117H58H97H101: React.FC<WCAGG117H58H97H101Props> = ({
    additionalAriaAttributes,
    ariaLabel,
    ariaLabelledById,
    additionalStyling,
    className,
    headline,
    listData,
    role,
    children,
}) => {
    return (
        <nav
            aria-labelledby={
                ariaLabelledById && headline ? ariaLabelledById : undefined
            }
            aria-label={ariaLabel}
            style={{ ...additionalStyling }}
            className={className}
            role={role}
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-busy={additionalAriaAttributes?.busy}
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-disabled={
                role === 'menu' || role === 'menubar' || role === 'tablist'
                    ? additionalAriaAttributes?.disabled
                    : undefined
            }
            aria-flowto={additionalAriaAttributes?.flowto}
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-live={additionalAriaAttributes?.live}
            aria-multiselectable={
                role === 'tablist'
                    ? additionalAriaAttributes?.multiselectable
                    : undefined
            }
            aria-orientation={
                role === 'tablist' || role === 'menu' || role === 'menubar'
                    ? additionalAriaAttributes?.orientation
                    : undefined
            }
            aria-owns={additionalAriaAttributes?.owns}
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-roledescription={additionalAriaAttributes?.roledescription}
        >
            {ariaLabelledById && headline && (
                <h2 id={ariaLabelledById}>{headline}</h2>
            )}
            <ul>
                {listData?.map((data, index) => (
                    <li key={index}>
                        <a
                            href={data?.disabled ? undefined : data.href}
                            onClick={() =>
                                data?.onClickFunction && data?.onClickFunction()
                            }
                            onFocus={() =>
                                data?.onFocusFunction && data?.onFocusFunction()
                            }
                            onMouseOver={() =>
                                data?.onHoverFunction && data?.onHoverFunction()
                            }
                            lang={data?.lang?.language}
                            download={data?.download}
                            hrefLang={data?.hreflang}
                            media={data?.media}
                            ping={data?.ping}
                            referrerPolicy={data?.referrerpolicy}
                            rel={data?.rel}
                            target={data?.target}
                            type={data?.type}
                            style={{ ...data?.additionalStyling }}
                        >
                            {data?.new ? (
                                <strong>{data.displayedName}</strong>
                            ) : (
                                data.displayedName
                            )}
                        </a>
                    </li>
                ))}
            </ul>
            {listData?.length === 0 && children}
        </nav>
    )
}

export default WCAGG117H58H97H101
