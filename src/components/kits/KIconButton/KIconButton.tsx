import IconButton, { type IconButtonOwnProps } from '@mui/material/IconButton'
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined'
import Tooltip, { type TooltipProps } from '@mui/material/Tooltip'
interface ButtonProps extends IconButtonOwnProps {
  loading?: boolean
  disabled?: boolean
  toolTipTitle?: string
  tooltipProps?: TooltipProps
  [key: string]: any
}

export function KIconButton({
  loading = false,
  disabled = false,
  toolTipTitle = '',
  tooltipProps,
  children,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <Tooltip title={toolTipTitle} {...tooltipProps}>
      <IconButton disabled={disabled || loading} {...props}>
        {loading ? <CachedOutlinedIcon className="rotatez-animation" /> : children}
      </IconButton>
    </Tooltip>
  )
}
