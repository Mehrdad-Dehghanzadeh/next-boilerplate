import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import LoginForm from '@components-page/login/LoginForm'
import Link from 'next/link'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined'

export default function Login() {
  return (
    <main className="auth-pages">
      <article className="auth-pages__container">
        <Card className="auth-pages__card">
          <div className="auth-pages__logo">
            <img src="/images/Feeleasylogo-main.svg" alt="logo" />
            <h1 className="text-center">ورود به سایت</h1>
          </div>

          <LoginForm />
          <Divider sx={{ marginTop: '16px' }} />
          <div className="auth-pages__footer-card">
            <Link href="/forget-password">
              <LockResetOutlinedIcon
                sx={{ verticalAlign: 'middle', marginRight: '8px' }}
              />
              <span>فراموشی رمز عبور</span>
            </Link>
            <Link href="/sign-up">
              <PersonAddIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <span>ثبت نام</span>
            </Link>
          </div>
        </Card>
      </article>
    </main>
  )
}
