export interface InputAttributes {
    accept?: string
    autocapitalize?: 'on' | 'off' | 'words' | 'characters'
    autocomplete?: 'on' | 'off'
    autofocus?: boolean
    capture?: string
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
