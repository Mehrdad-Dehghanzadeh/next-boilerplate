import IconButton, { type IconButtonOwnProps } from '@mui/material/IconButton'
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined'

interface ButtonProps extends IconButtonOwnProps {
  loading?: boolean
  disabled?: boolean
  [key: string]: any
}

export function KIconButton({
  loading = false,
  disabled = false,
  children,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <IconButton disabled={disabled || loading} {...props}>
      {loading ? <CachedOutlinedIcon className="rotatez-animation" /> : children}
    </IconButton>
  )
}
