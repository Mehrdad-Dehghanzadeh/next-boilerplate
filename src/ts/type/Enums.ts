export type EnumType = {
  id: string | number
  name: string | number
  color?: string
  [key: string]: unknown
}

export type EnumList = Array<EnumType>
