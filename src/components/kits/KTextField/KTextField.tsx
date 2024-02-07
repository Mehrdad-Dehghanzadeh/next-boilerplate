import './KTextField.scss'
import TextField from '@mui/material/TextField'
import { useMemo, useId } from 'react'
import { Controller } from 'react-hook-form'

const appName = process?.env?.APP_NAME

type PropsType = {
  className?: string
  control: any
  name: string
  onBlur?: (e: any) => void
  onChange?: (e: any) => void
  [key: string]: any
}

export function KTextField({
  className = '',
  control,
  name,
  onBlur,
  onChange,
  ...props
}: Readonly<PropsType>) {
  const render = ({ field }: { field: any }) => {
    const { onChange: onChangeField, onBlur: onBlurField, ...fieldProps } = field
    const _id = useId()

    let attrs = useMemo(() => {
      return { ...props, ...fieldProps }
    }, [props, fieldProps])

    return (
      <TextField
        {...attrs}
        onChange={(e) => {
          onChange?.(e)
          onChangeField?.(e)
        }}
        onBlur={(e) => {
          onBlur?.(e)
          onBlurField?.(e)
        }}
        name={`${appName}_${name}_${_id}`}
      />
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
      />
    </div>
  )
}
