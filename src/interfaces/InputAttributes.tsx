import { CSSProperties } from 'react'

export interface InputAttributes {
    accept?: string
    additionalStyling?: CSSProperties
    autocapitalize?: 'on' | 'off' | 'words' | 'characters'
    autocomplete?:
        | 'on'
        | 'off'
        | 'name'
        | 'honorific-prefix'
        | 'given-name'
        | 'additional-name'
        | 'family-name'
        | 'honorific-suffix'
        | 'nickname'
        | 'email'
        | 'username'
        | 'new-password'
        | 'current-password'
        | 'one-time-code'
        | 'organization-title'
        | 'organization'
        | 'street-address'
        | 'shipping'
        | 'billing'
        | 'address-line1'
        | 'address-line2'
        | 'address-line3'
        | 'address-level4'
        | 'address-level3'
        | 'address-level2'
        | 'address-level1'
        | 'country'
        | 'country-name'
        | 'postal-code'
        | 'cc-name'
        | 'cc-given-name'
        | 'cc-additional-name'
        | 'cc-family-name'
        | 'cc-number'
        | 'cc-exp'
        | 'cc-exp-month'
        | 'cc-exp-year'
        | 'cc-csc'
        | 'cc-type'
        | 'transaction-currency'
        | 'transaction-amount'
        | 'language'
        | 'bday'
        | 'bday-day'
        | 'bday-month'
        | 'bday-year'
        | 'sex'
        | 'tel'
        | 'tel-country-code'
        | 'tel-national'
        | 'tel-area-code'
        | 'tel-local'
        | 'tel-extension'
        | 'impp'
        | 'url'
        | 'photo'
        | 'webauthn'
    autofocus?: boolean
    capture?: boolean | 'user' | 'environment' | undefined
    checked?: boolean
    dirname?: string
    disabled?: boolean
    form?: string
    formaction?: string
    formenctype?: string
    formmethod?: 'get' | 'post'
    formnovalidate?: boolean
    formtarget?: string
    height?: number | string
    id?: string
    list?: string
    max?: string
    maxlength?: number
    min?: string
    minlength?: number
    multiple?: boolean
    name?: string
    pattern?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    size?: number
    step?: number
    type?:
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week'
    value?: string
    width?: number | string
}
