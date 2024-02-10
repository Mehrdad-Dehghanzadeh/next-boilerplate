export type ReturnType<T> = {
  value: T
  message: string
}

export type Validated = boolean | string

export type ValidatedFunc = (val: any) => string | boolean
