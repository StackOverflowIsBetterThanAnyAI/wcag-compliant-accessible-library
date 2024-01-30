import { CSSProperties } from 'react'

export interface SubmitAttributes {
    type: 'submit' | 'image'
    value: string
    additionalStyling?: CSSProperties
    className?: string
    dirname?: string
    formaction?: string
    formenctype?: string
    formmethod?: 'get' | 'post'
    formtarget?: string
    onClickFunction?: () => void
    onFocusFunction?: () => void
    onHoverFunction?: () => void
    src?: string
}
