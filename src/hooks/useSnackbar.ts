'use client'
import { useContext } from 'react'
import { SnackbarContext } from '@context/SnackbarContext'

export default () => {
  const { show } = useContext(SnackbarContext)

  return { snackbar: show }
}
