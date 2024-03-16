import DashboardFooter from '@components-includes/Dashboard/DashboardFooter/DashboardFooter'
import DashboardHeader from '@components-includes/Dashboard/DashboardHeader/DashboardHeader'
import DashboardNav from '@components-includes/Dashboard/DashboardNav/DashboardNav'
import Container from '@mui/material/Container'
import { authenticate } from '@utils/auth'
import './DashboardLayout.scss'

type PropsType = {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: Readonly<PropsType>) {
  authenticate()

  return (
    <div className="dashboard-layout">
      <DashboardHeader />
      <DashboardNav />
      <main className="dashboard-main">
        <Container>{children}</Container>
      </main>
      <DashboardFooter />
    </div>
  )
}
