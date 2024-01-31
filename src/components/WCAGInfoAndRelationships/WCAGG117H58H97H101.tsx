import React, { CSSProperties, ReactElement, ReactNode } from 'react'
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
    role?:
        | 'doc-index'
        | 'doc-pagelist'
        | 'doc-toc'
        | 'menu'
        | 'menubar'
        | 'presentation'
        | 'tablist'
}

type ConditionalProps =
    | {
          listData?: (LinkAttributes & {
              displayedText: ReactNode
              href: string
              lang?: LangAttributes
              new?: boolean
              onClickFunction?: () => void
              onFocusFunction?: () => void
              onHoverFunction?: () => void
          })[]
          children?: never
      }
    | {
          listData?: never
          children?: ReactElement<{ type: 'ul' }>
      }

const WCAGG117H58H97H101: React.FC<
    WCAGG117H58H97H101Props & ConditionalProps
> = ({
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
    const errors: string[] = []

    // checks if there are neither children nor a listData object array
    if (!children && !listData) {
        errors.push('Specify either "children" or "listData"!')
    }

    // checks if the child element is a <ul> element
    if (
        children &&
        (!React.isValidElement(children) || children.type !== 'ul')
    ) {
        errors.push('Your child element must be a <ul> element!')
    }

    // checks if displayedText has a wrong type
    listData &&
        listData.forEach((data, dataIndex) => {
            if (
                typeof data.displayedText === 'boolean' ||
                typeof data.displayedText === 'number'
            ) {
                errors.push(
                    `Your displayedText attribute in listData[${dataIndex}] must not be a ${typeof data.displayedText} value!`
                )
            }
        })

    //checks if href is an empty string
    listData &&
        listData.forEach((data, dataIndex) => {
            if (data.href.replace(' ', '').length < 1) {
                errors.push(
                    `Your href attribute in listData[${dataIndex}] has to have a length of at least one character!`
                )
            }
        })

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

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
                                <strong>{data.displayedText}</strong>
                            ) : (
                                data.displayedText
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
