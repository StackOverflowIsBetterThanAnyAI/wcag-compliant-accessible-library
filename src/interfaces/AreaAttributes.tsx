import { CSSProperties } from 'react'

export interface AreaAttributes {
    coords: string
    shape: 'default' | 'rect' | 'circle' | 'poly'
    altText?: string // May only be omitted if ypu are creating a hollow shape
    href?: string // May only be omitted if ypu are creating a hollow shape
    hollow?: boolean
    additionalStyling?: CSSProperties
    download?: string
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
    target?: '_blank' | '_parent' | '_self' | '_top'
}
