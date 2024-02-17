import type { SnackbarType } from '@enums/Snackbar'
import Snackbar from '@mui/material/Snackbar'
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useMemo,
  useState
} from 'react'
import { SnackbarContext } from '@context/SnackbarContext'
import './Snackbar.scss'

export function Snack(
  props: Readonly<{
    children:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined
  }>
) {
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<SnackbarType | null>(null)

  const clear = () => {
    setOpen(false)
    setType(null)
    setMessage('')
  }

  const show = (type: SnackbarType, message: any) => {
    setOpen(true)
    setMessage(message)
    setType(type)
    setTimeout(() => {
      clear()
    }, 5000)
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
