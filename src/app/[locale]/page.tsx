import TextField from '@mui/material/TextField'
import Profile from '@components-page/Profile'

export default function Home() {
  return (
    <main>
      <h1></h1>
      <TextField
        label="ملصق"
        placeholder="العنصر النائب"
        helperText="هذا نص مساعد"
        variant="outlined"
      />

      <Profile />
    </main>
  )
}
