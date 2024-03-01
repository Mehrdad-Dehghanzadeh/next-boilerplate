import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl, { type FormControlProps } from '@mui/material/FormControl'
import { useMemo, useId } from 'react'
import { Controller, type RegisterOptions } from 'react-hook-form'
import { useState } from 'react'

const appName = process.env.NEXT_PUBLIC_APP_NAME

type PropsType = {
  className?: string
  control: any
  name: string
  rules?: RegisterOptions | object
  onBlur?: (e: any) => void
  onChange?: (e: any) => void
  formControlProps?: FormControlProps
  helperText?: string
  InputProps?: any
  [key: string]: any
}

export function KPasswordField({
  className = '',
  control,
  name,
  rules = {},
  formControlProps = {},
  onBlur,
  onChange,
  helperText = '',
  InputProps = {},
  ...props
}: Readonly<PropsType>) {
  const render = ({ field, fieldState }: { field: any; fieldState: any }) => {
    const { onChange: onChangeField, onBlur: onBlurField, ...fieldProps } = field
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const _id = useId()
    const selfId = `${appName}_${name}_${_id}`

    let attrs = useMemo(() => {
      return { ...props, ...fieldProps }
    }, [props, fieldProps])

    return (
      <FormControl {...formControlProps} fullWidth>
        <TextField
          {...attrs}
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => {
            onChange?.(e)
            onChangeField?.(e)
          }}
          onBlur={(e) => {
            onBlur?.(e)
            onBlurField?.(e)
          }}
          name={selfId}
          error={!!fieldState?.invalid}
          InputProps={{
            ...InputProps,
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )
          }}
          helperText={fieldState?.error?.message || helperText}
        />
      </FormControl>
    )
  }

  let defaultValue = useMemo(
    () => control?._defaultValues?.[name] || '',
    [control?._defaultValues]
  )

  return (
    <div className={`k-password-field ${className}`}>
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={render}
        rules={rules}
      />
    </div>
  )
}
