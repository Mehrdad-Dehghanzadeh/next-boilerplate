import styles from './page.module.css'
import apis from '@apis'

export default function Home() {
  apis.auth.users().catch((err) => {
    console.log(err)
  })

  return (
    <main className={styles.main}>
      <h1></h1>
    </main>
  )
}
