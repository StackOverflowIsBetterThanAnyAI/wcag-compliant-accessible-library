export interface WAIARIAAttributes {
    activedescendant?: string
    atomic?: boolean
    autocomplete?: 'none' | 'inline' | 'list' | 'both'
    braillelabel?: string
    brailleroledescription?: string
    busy?: boolean
    checked?: 'false' | 'true' | 'mixed' | undefined | false | true
    colcount?: number
    colindex?: number
    colindextext?: string
    colspan?: number
    controls?: string
    current?:
        | 'page'
        | 'step'
        | 'location'
        | 'date'
        | 'time'
        | 'true'
        | 'false'
        | true
        | false
    describedby?: string
    description?: string
    details?: string
    disabled?: boolean
    errormessage?: string
    expanded?: 'false' | 'true' | undefined | false | true
    flowto?: string
    haspopup?:
        | 'false'
        | 'true'
        | 'menu'
        | 'listbox'
        | 'tree'
        | 'grid'
        | 'dialog'
        | false
        | true
    hidden?: 'false' | 'true' | undefined | false | true
    invalid?: 'grammar' | 'false' | 'spelling' | 'true' | false | true
    keyshortcuts?: string
    label?: string
    labelledby?: string
    level?: number
    live?: 'assertive' | 'off' | 'polite'
    modal?: boolean
    multiline?: boolean
    multiselectable?: boolean
    orientation?: 'horizontal' | 'vertical' | undefined
    owns?: string
    placeholder?: string
    posinset?: number
    pressed?: 'false' | 'mixed' | 'true' | undefined | false | true
    readonly?: boolean
    relevant?: 'additions' | 'all' | 'removals' | 'text' | 'additions text'
    required?: boolean
    roledescription?: string
    rowcount?: number
    rowindex?: number
    rowindextext?: string
    rowspan?: number
    selected?: 'false' | 'true' | undefined | false | true
    setsize?: number
    sort?: 'ascending' | 'descending' | 'none' | 'other'
    valuemax?: number
    valuemin?: number
    valuenow?: number
    valuetext?: string
}
