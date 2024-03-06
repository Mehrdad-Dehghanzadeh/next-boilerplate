import DashboardFooter from '@components-includes/Dashboard/DashboardFooter/DashboardFooter'
import DashboardHeader from '@components-includes/Dashboard/DashboardHeader/DashboardHeader'
import DashboardNav from '@components-includes/Dashboard/DashboardNav/DashboardNav'
import Container from '@mui/material/Container'

type PropsType = {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: Readonly<PropsType>) {
  return (
    <div className="dashboard-layout">
      <DashboardHeader />
      <DashboardNav />
      <main>
        <Container>{children}</Container>
      </main>
      <DashboardFooter />
    </div>
  )
}
