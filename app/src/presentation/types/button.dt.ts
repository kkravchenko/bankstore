export interface ButtonProps {
  label?: string
  bgImage?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
}
