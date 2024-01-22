import { CSSProperties } from 'react'

export interface FormAttributes {
    acceptCharset?: string
    action?: string
    autocomplete?: 'on' | 'off'
    classNameForm?: string
    enctype?: string
    method?: 'get' | 'post'
    name?: string
    novalidate?: boolean
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
    additionalStylingForm?: CSSProperties
}
