import React from 'react'

export interface ButtonProps {
    primary: boolean
    label: string
}

const Button = ({ primary, label }: ButtonProps) => {
    return <button>{primary ? label + label : label}</button>
}

export default Button
