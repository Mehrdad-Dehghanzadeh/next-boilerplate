import type { SnackbarType } from '@enums/Snackbar'
import Snackbar from '@mui/material/Snackbar'
import { useMemo, useState } from 'react'

export function Snack() {
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<SnackbarType | null>(null)

  const show = (type: SnackbarType) => {
    setMessage('Hello world!')
    setOpen(true)
    setType(type)
  }

  const classNameSnackbar: string = useMemo(
    () => (type ? ` snackbar--${type}` : ''),
    [type]
  )

  setTimeout(() => {}, 5000)

  return (
    <Snackbar
      className={`snackbar ${classNameSnackbar}`}
      open={open}
      message={message}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  )
}
