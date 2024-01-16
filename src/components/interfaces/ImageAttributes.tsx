export interface ImageAttributes {
    imageSource: string
    crossorigin?: 'anonymous' | 'use-credentials'
    decoding?: 'sync' | 'async' | 'auto'
    height?: number | string
    loading?: 'eager' | 'lazy'
    referrerpolicy?: React.HTMLAttributeReferrerPolicy
    sizes?: string
    width?: number | string
    additionalStyling?: React.CSSProperties
}
