import { CSSProperties } from 'react'
import { LangAttributes } from './LangAttributes'

export interface OptionAttributes {
    text: string
    value: string
    className?: string
    disabled?: boolean
    label?: string
    lang?: LangAttributes
    selected?: boolean
    additionalStyling?: CSSProperties
}
