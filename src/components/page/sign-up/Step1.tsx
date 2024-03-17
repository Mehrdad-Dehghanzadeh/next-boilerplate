'use client'
import { useForm } from 'react-hook-form'
import { KTextField, KButton, KPasswordField } from '@components-kits'
import useValidations from '@hooks/useValidations'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import apis from '@apis'
import { useState, type Dispatch } from 'react'
import useSnackbar from '@hooks/useSnackbar'

type FormValues = {
  mobilePhoneNumber: string
  password: string
  email: string
  rePassword: string
}

type Props = {
  setActiveStep: any
}

export default function Step1({ setActiveStep }: Readonly<Props>) {
  const { snackbar } = useSnackbar()

  const [loading, setLoading] = useState<boolean>(false)
  const { handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {}
  })

  const { required, email, mobile } = useValidations()

  const onsubmit = ({ mobilePhoneNumber, password, email }: FormValues) => {
    const payload = { mobilePhoneNumber, password, email }
    // setLoading(true)
    setActiveStep(1)
    // apis.users
    //   .signUp(payload)
    //   .then(() => {
    //     snackbar('success', 'ثبت نام شما با موفقیت انجام شد')
    //   })
    //   .catch(() => {
    //     snackbar('error', '')
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }

  return (
    <form className="login-form" id="loginForm" onSubmit={handleSubmit(onsubmit)}>
      <KTextField
        sx={{ marginBottom: '24px' }}
        control={control}
        // rules={{ required: required(), validate: mobile }}
        name="mobilePhoneNumber"
        label="شماره تلفن همراه"
        placeholder="لطفا شماره تلفن همراه را وارد کنید"
      />

      <KTextField
        sx={{ marginBottom: '24px' }}
        control={control}
        // rules={{ required: required(), validate: email }}
        name="email"
        label="ایمیل "
        placeholder="لطفا ایمیل یا شماره تماس را وارد کنید"
      />

      <KPasswordField
        sx={{ marginBottom: '24px' }}
        // rules={{ required: required() }}
        control={control}
        type="password"
        name="password"
        label="کلمه عبور"
      />

      <KPasswordField
        sx={{ marginBottom: '24px' }}
        // rules={{
        //   required: required(),
        //   validate: (val) =>
        //     watch('password') != val ? 'مقدار با گذرواژه یکی نیست' : null
        // }}
        control={control}
        type="password"
        name="rePassword"
        label="تکرار کلمه عبور"
      />

      <KButton
        loading={loading}
        variant="contained"
        type="submit"
        startIcon={<PersonAddIcon />}
        fullWidth
      >
        ثبت نام کاربر
      </KButton>
    </form>
  )
}
