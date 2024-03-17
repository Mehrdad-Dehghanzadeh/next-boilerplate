import { deepFreeze } from '@utils/object'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'

type NavItem = {
  text: string
  href: string
  icon?: React.ReactNode
}

export default deepFreeze<NavItem[]>([
  { text: 'پروفایل', href: '/dashboard/profile', icon: <ManageAccountsIcon /> }
])
