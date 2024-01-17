import { CSSProperties } from 'react'

export interface LinkAttributes {
    additionalStyling?: CSSProperties
    disabled?: boolean
    download?: string
    hreflang?: string
    media?: string
    ping?: string
    referrerpolicy?: React.HTMLAttributeReferrerPolicy
    rel?:
        | 'alternate'
        | 'author'
        | 'bookmark'
        | 'help'
        | 'license'
        | 'next'
        | 'nofollow'
        | 'noreferrer'
        | 'prefetch'
        | 'prev'
        | 'search'
        | 'tag'
    target?: '_blank' | '_parent' | '_self' | '_top'
    type?: string
}
