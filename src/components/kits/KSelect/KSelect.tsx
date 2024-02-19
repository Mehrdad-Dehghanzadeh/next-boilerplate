import './KSelect.scss'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { useMemo, useId } from 'react'
import { Controller, type RegisterOptions } from 'react-hook-form'

const appName = process?.env?.APP_NAME

type PropsType = {
  className?: string
  control: any
  name: string
  items: any[]
  valueKey?: string
  titleKey?: string
  flatList?: boolean
  label?: string
  rules?: RegisterOptions | object
  onBlur?: (e: any) => void
  [key: string]: any
}

export function KSelect({
  className = '',
  control,
  name,
  rules = {},
  items = [],
  valueKey = 'value',
  titleKey = 'title',
  flatList = false,
  label = '',
  onChange,
  ...props
}: Readonly<PropsType>) {
  const render = ({ field, fieldState }: { field: any; fieldState: any }) => {
    const { onChange: onChangeField, ...fieldProps } = field

    const _id = useId()
    let attrs = useMemo(() => {
      return { ...props, ...fieldProps }
    }, [props, fieldProps])

    const selfId = `${appName}_${name}_${_id}`

    return (
      <>
        <InputLabel id={selfId}>{label}</InputLabel>
        <Select
          {...attrs}
          id={selfId}
          name={selfId}
          helperText={fieldState?.error?.message || ''}
        >
          {items.map((el: any) => (
            <MenuItem
              key={`key-${_id}-${flatList ? el : el[valueKey]}`}
              value={flatList ? el : el[valueKey]}
            >
              {flatList ? el : el[titleKey]}
            </MenuItem>
          ))}
        </Select>
      </>
    )
  }

  let defaultValue = useMemo(
    () => control?._defaultValues?.[name] || '',
    [control?._defaultValues]
  )

  return (
    <div className={`k-select ${className}`}>
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
