import { CSSProperties } from 'react'

export interface GlobalAttributes {
    accesskey?: string
    additionalStyling?: CSSProperties
    contenteditable?: boolean | 'inherit' | 'plaintext-only'
    dir?: string
    draggable?: boolean
    hiddenElement?: boolean
    id?: string
    inputmode?:
        | 'email'
        | 'search'
        | 'none'
        | 'numeric'
        | 'text'
        | 'tel'
        | 'url'
        | 'decimal'
    spellcheck?: boolean
    tabindex?: number
    title?: string
    translate?: 'yes' | 'no'
}
