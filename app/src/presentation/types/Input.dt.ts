import { ChangeEventHandler } from 'react'

export interface InputProps {
  bgImage?: string
  placeholder?: string
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
