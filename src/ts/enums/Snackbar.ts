import { type EnumList } from '@type/Enums'

export enum SnackbarType {
  Info = 'info',
  Error = 'error',
  Success = 'success',
  Alert = 'alert'
}

export const SnackbarEnumList: EnumList = [
  {
    id: SnackbarType.Error,
    name: 'خطا',
    color: 'error'
  },

  {
    id: SnackbarType.Success,
    name: 'موفق',
    color: 'success'
  },

  {
    id: SnackbarType.Info,
    name: 'اطلاع',
    color: 'info'
  },

  {
    id: SnackbarType.Alert,
    name: 'توجه',
    color: 'alert'
  }
]
