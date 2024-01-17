import { CSSProperties } from 'react'

export interface AreaAttributes {
    additionalStyling?: CSSProperties
    altText?: string // May only be omitted if ypu are creating a hollow shape
    coords: string
    download?: string
    href?: string // May only be omitted if ypu are creating a hollow shape
    hreflang?: string
    media?: string
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
    shape: 'default' | 'rect' | 'circle' | 'poly'
    target?: '_blank' | '_parent' | '_self' | '_top'
}
