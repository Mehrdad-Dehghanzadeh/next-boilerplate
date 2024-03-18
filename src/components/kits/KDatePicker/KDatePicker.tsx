import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import FormControl, { type FormControlProps } from '@mui/material/FormControl'
import { Controller, type RegisterOptions } from 'react-hook-form'
import { useMemo, useId } from 'react'

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
  [key: string]: any
}

export function KDatePicker({
  className = '',
  control,
  name,
  rules = {},
  formControlProps = {},
  onBlur,
  onChange,
  helperText = '',
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
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DatePicker
            {...attrs}
            onChange={(e) => {
              onChange?.(e)
              onChangeField?.(e)
            }}
            onBlur={(e: any) => {
              onBlur?.(e)
              onBlurField?.(e)
            }}
            name={selfId}
            error={!!fieldState?.invalid}
            helperText={fieldState?.error?.message || helperText}
          />
        </LocalizationProvider>
      </FormControl>
    )
  }

  let defaultValue = useMemo(
    () => control?._defaultValues?.[name] || '',
    [control?._defaultValues]
  )

  return (
    <div className="k-date-picker" dir="rtl">
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
