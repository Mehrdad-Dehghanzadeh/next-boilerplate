import type { EnumType, EnumList } from '@type/Enums'

type EnumProvider = object | EnumType
type Enums = Record<string, any>
const enumsList: Record<string, EnumList> = {}
const enums: Enums = {}

export function enumsProvider(
  type: string,
  value: string | number | boolean,
  prop: string = 'id'
): EnumProvider {
  const item = enumsList[type as keyof typeof enumsList].find(
    (i: EnumType) => i[prop as keyof typeof i] === value
  )

  return typeof item !== 'undefined' ? item : {}
}

export function getEnumList(type: keyof typeof enumsList): EnumType[] {
  return enumsList[type]
}

export function getEnum(type: keyof Enums): Pick<Enums, keyof Enums> | undefined {
  return enums[type]
}
