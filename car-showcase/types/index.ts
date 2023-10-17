import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
    title: string
    style?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit'
}