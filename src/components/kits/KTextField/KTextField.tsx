import TextField from '@mui/material/TextField'
import FormControl, { type FormControlProps } from '@mui/material/FormControl'
import { useMemo, useId } from 'react'
import { Controller, type RegisterOptions } from 'react-hook-form'
import { convertNumber } from '@/utils/text'

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
  isConvertPersianNumber?: boolean
  [key: string]: any
}

export function KTextField({
  className = '',
  control,
  name,
  rules = {},
  formControlProps = {},
  onBlur,
  onChange,
  helperText = '',
  isConvertPersianNumber = true,
  ...props
}: Readonly<PropsType>) {
  const render = ({ field, fieldState }: { field: any; fieldState: any }) => {
    const { onChange: onChangeField, onBlur: onBlurField, ...fieldProps } = field

    const _id = useId()
    const selfId = `${appName}_${name}_${_id}`

    let attrs = useMemo(() => {
      return { ...props, ...fieldProps }
    }, [props, fieldProps])

    return (
      <FormControl {...formControlProps} fullWidth>
        <TextField
          {...attrs}
          onChange={(e) => {
            onChange?.(e)
            onChangeField?.(e)
          }}
          onBlur={(e) => {
            if (isConvertPersianNumber) {
              e.target.value = convertNumber(e.target.value ?? '')
            }
            onBlur?.(e)
            onBlurField?.(e)
          }}
          name={selfId}
          error={!!fieldState?.invalid}
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
    <div className={`k-text-field ${className}`}>
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
