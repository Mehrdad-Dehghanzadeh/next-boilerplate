import DashboardFooter from '@components-includes/Dashboard/DashboardFooter/DashboardFooter'
import DashboardHeader from '@components-includes/Dashboard/DashboardHeader/DashboardHeader'
import DashboardNav from '@components-includes/Dashboard/DashboardNav/DashboardNav'

type PropsType = {
  childern: React.ReactNode
}

export default async function DashboardLayout({ childern }: Readonly<PropsType>) {
  return (
    <div className="dashboard-layout">
      <DashboardHeader />
      <DashboardNav />
      <main>{childern}</main>
      <DashboardFooter />
    </div>
  )
}
