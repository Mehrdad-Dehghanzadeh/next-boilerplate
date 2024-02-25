'use client'
import { useForm } from 'react-hook-form'
import { KTextField } from '@components-kits'
import Button from '@mui/material/Button'
import useValidations from '@hooks/useValidations'
import LoginIcon from '@mui/icons-material/Login'
import { checkMobile, isEmail } from '@/assets/validations'
import apis from '@apis'

type FormValues = {
  emailOrphoneNumber: string
  password: string
}
export default function LoginForm() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      emailOrphoneNumber: '',
      password: ''
    }
  })

  const { required, emailOrMobile } = useValidations()

  const onsubmit = ({ emailOrphoneNumber, password }: FormValues) => {
    if (checkMobile(emailOrphoneNumber)) {
      apis.auth
        .loginMobile({ password, mobilePhoneNumber: emailOrphoneNumber })
        .then((res: any) => {
          console.log(res)
        })
        .catch((err: any) => {
          console.log(err)
        })
    }

    if (isEmail(emailOrphoneNumber)) {
      apis.auth
        .loginEmail({ password, email: emailOrphoneNumber })
        .then((res: any) => {
          console.log(res)
        })
        .catch((err: any) => {
          console.log(err)
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
      <KTextField
        sx={{ marginTop: '24px', marginBottom: '24px' }}
        rules={{ required: required() }}
        control={control}
        type="password"
        name="password"
        label="کلمه عبور"
      />

      <Button
        variant="contained"
        type="submit"
        startIcon={<LoginIcon />}
        sx={{ width: '100%' }}
      >
        ورود
      </Button>
    </form>
  )
}
