import { JSX } from 'react'
import { InputProps } from '../types/Input.dt'

export default (props: InputProps): JSX.Element => {
  return (
    <input
      type='text'
      placeholder={props?.placeholder}
      className={props?.className}
      onChange={props?.onChange}
      style={
        props?.bgImage
          ? {
              backgroundImage: `url(${props?.bgImage})`,
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
    />
  )
}
