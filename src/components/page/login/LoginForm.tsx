'use client'
import { useForm } from 'react-hook-form'
import { KTextField, KButton, KPasswordField, KSelectGrouping } from '@components-kits'
import useValidations from '@hooks/useValidations'
import LoginIcon from '@mui/icons-material/Login'
import { checkMobile, isEmail } from '@/assets/validations'
import apis from '@apis'
import { useState } from 'react'
import useSnackbar from '@hooks/useSnackbar'
import type { LoginEmailModel, LoginMobileModel } from '@models/Login'
import { useRouter } from 'next/navigation'
import { setToken } from '@utils/auth'

type FormValues = {
  emailOrphoneNumber: string
  password: string
  select: any
}
const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWIwZmJmOWUtY2M5Zi00MzVlLWE0YWEtMzllZWQ2NTJmNTI2IiwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwibmF0aW9uYWxDYXJkIjpudWxsLCJpZGVudGl0eUNhcmQiOm51bGwsImNvbnRhY3RJbmZvIjp7Im1vYmlsZVBob25lTnVtYmVyIjoiMDkzNTU5Mzk2MDIiLCJsYW5kbGluZVBob25lTnVtYmVyIjpudWxsLCJlbWFpbEFkZHJlc3MiOiJleGFtcGxlQGV4YW1wbGVsLmNvbSJ9LCJwZXJzb25hbEluZm8iOm51bGwsInBvc3RhbEFkZHJlc3MiOm51bGwsImV4cCI6MTcwOTkyMDQ3NDUxMX0.1Gtas6KK25duBimyAY5tRWecZtzOy_dcpcUkw_xGrZQ1'

export default function LoginForm() {
  const { snackbar } = useSnackbar()
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      emailOrphoneNumber: '',
      password: '',
      select: []
    }
  })

  const { required, emailOrMobile } = useValidations()

  const loginWithMobile = async (payload: LoginMobileModel) => {
    try {
      setLoading(true)
      await apis.auth.loginMobile(payload)
      await setToken(jwt)
      router.replace('/dashboard')
    } catch (error) {
      snackbar('error', error)
    } finally {
      setLoading(false)
    }
  }

  const loginWithEmail = async (payload: LoginEmailModel) => {
    try {
      setLoading(true)
      await apis.auth.loginEmail(payload)
      await setToken(jwt)
      router.replace('/dashobard')
    } catch (error) {
      snackbar('error', error)
    } finally {
      setLoading(false)
    }
  }

  const onsubmit = ({ emailOrphoneNumber, password }: FormValues) => {
    if (checkMobile(emailOrphoneNumber)) {
      loginWithMobile({ password, mobilePhoneNumber: emailOrphoneNumber })
    }
    if (isEmail(emailOrphoneNumber)) {
      loginWithEmail({ password, email: emailOrphoneNumber })
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

      <KSelectGrouping
        items={[
          {
            value: '1',
            title: '1-1',
            childern: [
              { title: 'child 1.1', value: 1.1 },
              { title: 'child 1.2', value: 1.2 }
            ]
          },
          {
            value: '2',
            title: '2-2',
            childern: [
              { title: 'child 2.1', value: 2.1 },
              { title: 'child 2.2', value: 2.2 },
              { title: 'child 2.3', value: 2.3 }
            ]
          },
          { value: '3', title: '3-3' }
        ]}
        name="select"
        rules={{ required: required() }}
        control={control}
        label="نوع کلمه عبور"
        multiple
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
