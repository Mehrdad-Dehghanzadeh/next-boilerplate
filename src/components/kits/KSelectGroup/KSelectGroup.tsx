import { useMemo, useId, useState } from 'react'
import { Controller, type RegisterOptions } from 'react-hook-form'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl, { type FormControlProps } from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import './KSelectGroup.scss'

const appName = process.env.NEXT_PUBLIC_APP_NAME

type PropsType = {
  className?: string
  control: any
  name: string
  items: any[]
  valueKey?: string
  titleKey?: string
  childernKey?: string
  childernTitle?: string
  flatList?: boolean
  label?: string
  helperText?: string
  rules?: RegisterOptions | object
  formControlProps?: FormControlProps
  multiple?: boolean
  onChange?: (e: any) => any
  [key: string]: any
}

export function KSelectGrouping({
  className = '',
  control,
  name,
  rules = {},
  items = [],
  valueKey = 'value',
  titleKey = 'title',
  childernKey = 'childern',
  childernTitle = '',
  flatList = false,
  helperText = '',
  label = '',
  multiple = false,
  formControlProps = {},
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
      <FormControl {...formControlProps} error={fieldState.invalid} fullWidth>
        <InputLabel>{label}</InputLabel>

        <Select
          {...attrs}
          name={selfId}
          multiple={multiple}
          labelId={`${selfId}-label`}
          label={label}
          onChange={(e) => {
            onChange?.(e)
            onChangeField?.(e)
          }}
        >
          {items.map((el: any) => {
            const title = el[titleKey]

            return [
              <ListSubheader key={`key-${_id}-${title}`}>{title}</ListSubheader>,
              el?.[childernKey]?.map((child: any) => {
                const value = flatList ? child : child[valueKey]
                const title = flatList ? child : child[titleKey]
                return (
                  <MenuItem key={`key-${_id}-${value}`} value={value}>
                    {multiple ? <ListItemText primary={title} /> : title}
                  </MenuItem>
                )
              })
            ]
          })}
        </Select>
        {(fieldState?.error?.message || helperText) && (
          <FormHelperText>{fieldState?.error?.message || helperText}</FormHelperText>
        )}
      </FormControl>
    )
  }

  let defaultValue = useMemo(
    () => control?._defaultValues?.[name] || '',
    [control?._defaultValues]
  )

  return (
    <div className={`k-select-group ${className}`}>
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
