'use client'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import './Profile.scss'

export default function Profile() {
  return (
    <div className="profile">
      <Button>
        <span>سلام دنیا !</span>
        <AccessAlarmIcon />
      </Button>
    </div>
  )
}
