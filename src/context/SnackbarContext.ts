import { createContext } from 'react'
import type { SnackbarType } from '@enums/Snackbar'

export type SnackbarContextType = {
  setOpen: (value: boolean) => void
  setMessage: (value: string) => void
  setType: (value: SnackbarType) => void
}

export const SnackbarContext = createContext<any>({
  show:() =>{}
})


