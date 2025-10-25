import { Country } from '@/type.dt'
import { ChangeEventHandler } from 'react'

export interface SelectProps {
  bgImage?: string
  className?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  list: Country[]
}
