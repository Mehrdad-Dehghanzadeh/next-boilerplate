import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import LoginForm from '@components-page/login/LoginForm'
import Link from 'next/link'
import './login.scss'

export default function Login() {
  return (
    <main className="login-page">
      <article className="login-page__container">
        <Card className="login-page__card">
          <div className="login-page__logo">
            <img src="/images/Feeleasylogo-main.svg" alt="logo" />
            <h1 className="text-center">ورود به سایت</h1>
          </div>

          <LoginForm />
          <Divider sx={{ marginTop: '16px' }} />
          <div className="login-page__footer-card">
            <Link href="/forget-password">فراموشی رمز عبور</Link>
            <Link href="/signup">ثبت نام</Link>
          </div>
        </Card>
      </article>
    </main>
  )
}
