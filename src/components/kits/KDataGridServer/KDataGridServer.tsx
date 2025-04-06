import { type Resource } from '@apis-type/index'
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { DataGrid, type DataGridProps } from '@mui/x-data-grid'
import useSnackbar from '@hooks/useSnackbar'
import apis from '@apis'
import './KDataGridServer.scss'

interface Props extends DataGridProps {
  resource: Resource
  method?: string
  refresh?: (callback: () => void) => void
  params?: Record<string, any>
  responseDataField?: string
}

export const KDataGridServer = forwardRef<any, Props>(function (
  { resource, refresh, method = 'read', responseDataField = 'data', ...props },
  _ref
) {
  const { snackbar } = useSnackbar()
  const [loading, setLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<Record<string, any>[]>([])

  const createPayload = () => {
    const payload = { ...props.params }

    return payload
  }

  const getData = () => {
    setLoading(true)
    const payload = createPayload()
    //@ts-ignore
    apis[resource][method](payload)
      .then(({ data }: { data: any }) => {
        const tempValue = Array.isArray(data?.[responseDataField])
          ? data?.[responseDataField]
          : []
        setRows(tempValue)
      })
      .catch((err: Error) => {
        snackbar('error', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  useImperativeHandle(
    _ref,
    () => {
      return { getData }
    },
    []
  )

  return (
    <div className="k-data-grid-server">
      <DataGrid rows={rows} loading={loading} ref={_ref} {...props} disableColumnMenu />
    </div>
  )
})
