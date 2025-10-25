import { JSX } from 'react'
import { SelectProps } from '../types/select.dt'

export default (props: SelectProps): JSX.Element => {
  return (
    <select
      className={props.className}
      onChange={props?.onChange}
      style={
        props?.bgImage
          ? {
              backgroundImage: `url(${props?.bgImage})`,
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
      defaultValue={props.list.find((option) => option.select)?.value}
    >
      {props.list.map((option) => (
        <option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  )
}
