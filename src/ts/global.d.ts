type EmptyString = ''

type NumberString = `${number}`

type CssAbsoluteUnit =
  | `${number}cm`
  | `${number}mm`
  | `${number}in`
  | `${number}px`
  | `${number}pt`
  | `${number}pc`

type CssRelativeUnit =
  | `${number}em`
  | `${number}ex`
  | `${number}ch`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${number}vmin`
  | `${number}vmax`
  | `${number}%`

type PxUnit = `${number}px`
type PercentUnit = `${number}%`
type CssSizeValue = CssAbsoluteUnit | CssRelativeUnit

type TData<T = any> = object & Record<string, T>

type TList<T = any> = T[]

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

type EnumType = {
  id: string | number
  name: string | number
  color?: string
  [key: string]: unknown
}

type EnumList = Array<EnumType>
