'use client'

import TablePagination from '@mui/material/TablePagination'
export default function Profile() {
  return (
    <div>
      <TablePagination
        count={2000}
        rowsPerPage={10}
        page={1}
        component="div"
        onPageChange={() => {}}
      />
    </div>
  )
}
