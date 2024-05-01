import { useMemo, useId } from 'react'
import { Controller, type RegisterOptions } from 'react-hook-form'
import FormControl, { type FormControlProps } from '@mui/material/FormControl'
import Checkbox from '@mui/material/Checkbox'
import './KCheckbox.scss'

type PropsType = {
  className?: string
  id?: string
  control: any
  name: string
  label?: string
  rules?: RegisterOptions | object
  formControlProps?: FormControlProps
  onChange?: (e: any) => any
  [key: string]: any
}

const appName = process.env.NEXT_PUBLIC_APP_NAME

export function KCheckbox({
  className = '',
  id = '',
  control,
  name,
  rules = {},
  label = '',
  formControlProps = {},
  onChange,
  ...props
}: Readonly<PropsType>) {
  let defaultValue = useMemo(
    () => control?._defaultValues?.[name] || '',
    [control?._defaultValues]
  )

  const render = ({ field, fieldState }: { field: any; fieldState: any }) => {
    const { onChange: onChangeField, ...fieldProps } = field
    const _id = useId()
    let attrs = useMemo(() => {
      return { ...props, ...fieldProps }
    }, [props, fieldProps])

    const selfId = `${appName}_${name}_${_id}`

    return (
      <FormControl
        className="k-checkbox__form-control"
        component={'span'}
        error={fieldState.invalid}
        {...formControlProps}
      >
        <label className="k-checkbox__label" htmlFor={id || `label-${_id}`}>
          {label}
        </label>
        <Checkbox
          defaultChecked={defaultValue}
          id={id || `label-${_id}`}
          name={selfId}
          onChange={(e) => {
            onChange?.(e)
            onChangeField?.(e)
          }}
          {...attrs}
        />
      </FormControl>
    )
  }

  return (
    <div className="k-checkbox">
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
