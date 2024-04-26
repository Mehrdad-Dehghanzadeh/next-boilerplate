'use client'
import { KDataGridServer } from '@/components/kits'

export default function Home() {
  const columns = [
    { field: 'userId', headerName: 'شناسه کاربر', width: 130 },
    { field: 'firstname', headerName: 'نام' },
    { field: 'lastname', headerName: 'نام خانوادگی' },
    {
      field: 'friends',
      headerName: 'دوستان',
      valueGetter: (value) => {
        return <span>{value?.join(' ')}</span>
      }
    }
  ]

  return (
    <KDataGridServer
      columns={columns}
      resource="users"
      method="template"
      responseDataField="users"
      getRowId={(row) => row.userId}
    />
  )
}
