import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import SignUpForm from '@components-page/sign-up/signUpFrom'
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined'
import LoginIcon from '@mui/icons-material/Login'

export default function SignUp() {
  return (
    <main className="auth-pages">
      <article className="auth-pages__container">
        <Card className="auth-pages__card">
          <div className="auth-pages__logo">
            <img src="/images/Feeleasylogo-main.svg" alt="logo" />
            <h1 className="text-center">ثبت نام در سایت</h1>
          </div>

          <SignUpForm />
          <Divider sx={{ marginTop: '16px' }} />
          <div className="auth-pages__footer-card">
            <Link href="/forget-password">
              <LockResetOutlinedIcon
                sx={{ verticalAlign: 'middle', marginRight: '8px' }}
              />
              <span>فراموشی رمز عبور</span>
            </Link>

            <Link href="/login">
              <LoginIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <span>ورود</span>
            </Link>
          </div>
        </Card>
      </article>
    </main>
  )
}
