import React, { ReactNode } from 'react'
import { LinkAttributes } from '../interfaces/LinkAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGG115H49H58Props {
    linkData: LinkAttributes & { href: string }
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'disabled'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'multiselectable'
        | 'orientation'
        | 'placeholder'
        | 'pressed'
        | 'rowcount'
        | 'rowindex'
        | 'rowindextext'
        | 'rowspan'
        | 'sort'
        | 'valuemax'
        | 'valuemin'
        | 'valuenow'
        | 'valuetext'
    >
    onClickFunction?: () => void
    className?: string
    lang?: LangAttributes
    role?: 'switch' | 'tab' | 'treeitem'
    children: ReactNode
}

const G115H49A: React.FC<WCAGG115H49H58Props> = ({
    additionalAriaAttributes,
    className,
    linkData,
    onClickFunction,
    lang,
    role,
    children,
}) => {
    try {
        if (linkData.href.length < 1) {
            throw new Error(
                'Your linkData.href attribute hast to have a length of at least one character!'
            )
        }
        return (
            <a
                href={linkData?.disabled ? undefined : linkData.href}
                onClick={() => onClickFunction && onClickFunction()}
                lang={lang?.language}
                download={linkData?.download}
                hrefLang={linkData?.hreflang}
                media={linkData?.media}
                ping={linkData?.ping}
                referrerPolicy={linkData?.referrerpolicy}
                rel={linkData?.rel}
                target={linkData?.target}
                type={linkData?.type}
                className={className}
                style={{ ...linkData?.additionalStyling }}
                role={role}
                aria-atomic={additionalAriaAttributes?.atomic}
                aria-busy={additionalAriaAttributes?.busy}
                aria-checked={
                    role === 'switch'
                        ? additionalAriaAttributes?.checked
                        : undefined
                }
                aria-controls={additionalAriaAttributes?.controls}
                aria-current={additionalAriaAttributes?.current}
                aria-describedby={additionalAriaAttributes?.describedby}
                aria-description={additionalAriaAttributes?.description}
                aria-details={additionalAriaAttributes?.details}
                aria-errormessage={
                    role === 'switch'
                        ? additionalAriaAttributes?.errormessage
                        : undefined
                }
                aria-expanded={
                    role === 'tab' || role === 'switch'
                        ? additionalAriaAttributes?.expanded
                        : undefined
                }
                aria-flowto={additionalAriaAttributes?.flowto}
                aria-haspopup={
                    role === 'tab'
                        ? additionalAriaAttributes?.haspopup
                        : undefined
                }
                aria-hidden={additionalAriaAttributes?.hidden}
                aria-invalid={
                    role === 'switch'
                        ? additionalAriaAttributes?.invalid
                        : undefined
                }
                aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
                aria-label={additionalAriaAttributes?.label}
                aria-labelledby={additionalAriaAttributes?.labelledby}
                aria-live={additionalAriaAttributes?.live}
                aria-owns={additionalAriaAttributes?.owns}
                aria-posinset={
                    role === 'tab'
                        ? additionalAriaAttributes?.posinset
                        : undefined
                }
                aria-readonly={
                    role === 'switch'
                        ? additionalAriaAttributes?.readonly
                        : undefined
                }
                aria-relevant={additionalAriaAttributes?.relevant}
                aria-required={
                    role === 'switch'
                        ? additionalAriaAttributes?.required
                        : undefined
                }
                aria-roledescription={additionalAriaAttributes?.roledescription}
                aria-selected={
                    role === 'tab'
                        ? additionalAriaAttributes?.selected
                        : undefined
                }
                aria-setsize={
                    role === 'tab'
                        ? additionalAriaAttributes?.setsize
                        : undefined
                }
            >
                {children}
            </a>
        )
    } catch (error: any) {
        console.error(error.message)
        return
    }
}

export default G115H49A
