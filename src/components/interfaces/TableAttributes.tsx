import { LangAttributes } from './LangAttributes'

export interface TableAttributes {
    text: string //can also be an empty string
    isHeader?: boolean
    rowspan?: number
    colspan?: number
    headers?: string
    id?: string
    lang?: LangAttributes
    scope?: 'col' | 'colgroup' | 'row' | 'rowgroup'
}
