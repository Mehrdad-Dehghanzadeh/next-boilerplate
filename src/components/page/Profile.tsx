'use client'
import Button from '@mui/material/Button'
import { KTextField } from '@components-kits'
import { useForm } from 'react-hook-form'
import useValidations from '@hooks/useValidations'
import useAppStore from '@store/app'
import useSnackbar from '@hooks/useSnackbar'
import './Profile.scss'

type FormValues = {
  username: string
  password: string
}
export default function Profile() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      username: 'IR',
      password: '1'
    }
  })
  const appStore = useAppStore()

  const { required, maxLength, iban } = useValidations()
  const { snackbar } = useSnackbar()

  const onsubmit = (data: FormValues) => {
    appStore.setUser(data)
    snackbar('success', 'sss')
  }
  return (
    <form className="profile" onSubmit={handleSubmit(onsubmit)}>
      <KTextField control={control} name="username" label="فیلد یک" />
      <KTextField
        rules={{ required: required(), maxLength: maxLength(4) }}
        control={control}
        type="password"
        name="password"
        label="فیلد دو"
      />

      <Button variant="contained" type="submit">
        ثبت
      </Button>
    </form>
  )
}
