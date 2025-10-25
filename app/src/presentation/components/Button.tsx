import { ButtonProps } from '@/presentation/types/button.dt'

export const Button = (props: ButtonProps) => {
  return (
    <button
      type='button'
      className={props.className}
      onClick={props?.onClick}
      style={
        ({ ...props?.style } as React.CSSProperties,
        props?.bgImage
          ? {
              backgroundImage: `url(${props?.bgImage})`,
            }
          : {})
      }
      disabled={props?.disabled ?? false}
    >
      {props.label}
      {props?.children}
    </button>
  )
}
