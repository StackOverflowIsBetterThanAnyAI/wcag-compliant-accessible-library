import { CSSProperties } from 'react'

export interface SelectAttributes {
    id: string
    name: string
    autofocus?: boolean
    className?: string
    disabled?: boolean
    form?: string
    seeMultiple?: boolean
    required?: boolean
    size?: number
    additionalStyling?: CSSProperties
}
