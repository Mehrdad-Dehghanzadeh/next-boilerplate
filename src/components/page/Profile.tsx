'use client'
import Button from '@mui/material/Button'
import { KTextField } from '@components-kits'
import { useForm } from 'react-hook-form'

import './Profile.scss'
type FormValues = {
  username: string
  password: string
}
export default function Profile() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      password: '1'
    }
  })

  const onsubmit = (data) => {
    console.log(data)
  }

  return (
    <form className="profile" onSubmit={handleSubmit(onsubmit)}>
      <KTextField control={control} name="username" label="فیلد یک" />
      <KTextField control={control} type="password" name="password" label="فیلد دو" />

      <Button variant="contained" type="submit">
        ثبت
      </Button>
    </form>
  )
}
