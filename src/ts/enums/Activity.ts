import { type EnumList } from '@type/Enums'

export enum Activity {
  Inactive,
  Active
}

const enumList: EnumList = [
  {
    id: Activity.Inactive,
    name: 'غیرفعال',
    color: 'error'
  },

  {
    id: Activity.Active,
    name: 'فعال',
    color: 'success'
  }
]

export default { enumList, enum: Activity }
