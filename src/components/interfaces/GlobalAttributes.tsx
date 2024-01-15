export interface GlobalAttributes {
    accesskey?: string
    contenteditable?: boolean | 'inherit' | 'plaintext-only'
    dir?: string
    draggable?: boolean
    hiddenDiv?: boolean
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
    lang?: string
    spellcheck?: boolean
    tabindex?: number
    title?: string
    translate?: 'yes' | 'no'
}
