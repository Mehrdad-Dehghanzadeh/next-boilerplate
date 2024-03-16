import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Link from 'next/link'
import nav from './Nav'

import './DashboardNav.scss'

export default function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <Paper className="dashboard-nav__wrapper" elevation={2}>
        <List className="dashboard-nav-list">
          {nav.map((el, index) => (
            <Link href={el.href} key={`${el.href}-${index}`}>
              <ListItemButton className="dashboard-nav-list__item">
                <ListItemIcon className="dashboard-nav-list__icon">
                  {el?.icon}
                </ListItemIcon>
                <ListItemText className="dashboard-nav-list__title" primary={el.text} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Paper>
    </nav>
  )
}
