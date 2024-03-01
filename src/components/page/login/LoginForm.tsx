'use client'
import { useForm } from 'react-hook-form'
import { KTextField, KButton, KPasswordField } from '@components-kits'
import useValidations from '@hooks/useValidations'
import LoginIcon from '@mui/icons-material/Login'
import { checkMobile, isEmail } from '@/assets/validations'
import apis from '@apis'
import { useState } from 'react'
import useSnackbar from '@hooks/useSnackbar'

type FormValues = {
  emailOrphoneNumber: string
  password: string
}
export default function LoginForm() {
  const { snackbar } = useSnackbar()

  const [loading, setLoading] = useState<boolean>(false)
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      emailOrphoneNumber: '',
      password: ''
    }
  })

  const { required, emailOrMobile } = useValidations()

  const onsubmit = ({ emailOrphoneNumber, password }: FormValues) => {
    if (checkMobile(emailOrphoneNumber)) {
      setLoading(true)
      apis.auth
        .loginMobile({ password, mobilePhoneNumber: emailOrphoneNumber })
        .then((res: any) => {
          console.log(res)
        })
        .catch((err: any) => {
          snackbar('error', 'مشکل احراز هویت')
        })
        .finally(() => {
          setLoading(false)
        })
    }

    if (isEmail(emailOrphoneNumber)) {
      setLoading(true)
      apis.auth
        .loginEmail({ password, email: emailOrphoneNumber })
        .then((res: any) => {
          console.log(res)
        })
        .catch((err: any) => {
          console.log(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <form className="login-form" id="loginForm" onSubmit={handleSubmit(onsubmit)}>
      <KTextField
        control={control}
        rules={{ required: required(), validate: emailOrMobile }}
        name="emailOrphoneNumber"
        label="ایمیل یا شماره تماس"
        placeholder="لطفا ایمیل یا شماره تماس را وارد کنید"
      />
      <KPasswordField
        sx={{ marginTop: '24px', marginBottom: '24px' }}
        rules={{ required: required() }}
        control={control}
        type="password"
        name="password"
        label="کلمه عبور"
      />

      <KButton
        loading={loading}
        variant="contained"
        type="submit"
        startIcon={<LoginIcon />}
        fullWidth
      >
        ورود
      </KButton>
    </form>
  )
}
