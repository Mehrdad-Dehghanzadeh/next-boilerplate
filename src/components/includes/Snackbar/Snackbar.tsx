import type { SnackbarType } from '@enums/Snackbar'
import Snackbar from '@mui/material/Snackbar'
import { useMemo, useState } from 'react'
import { SnackbarContext } from '@context/SnackbarContext'
type SnackbarContextType = {
  setOpen: (value: boolean) => void
  setMessage: (value: string) => void
  setType: (value: SnackbarType) => void
}

export function Snack(props) {
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<SnackbarType | null>(null)

  const show = (type: SnackbarType, message: any) => {
    setOpen(true)
    setMessage(message)
    setType(type)
  }

  const contextValue: any = useMemo(() => {
    return {
      show
    }
  }, [])

  const classNameSnackbar: string = useMemo(
    () => (type ? ` snackbar--${type}` : ''),
    [type]
  )

  return (
    <SnackbarContext.Provider value={contextValue}>
      {props.children}

      <Snackbar
        className={`snackbar ${classNameSnackbar}`}
        open={open}
        message={message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </SnackbarContext.Provider>
  )
}
