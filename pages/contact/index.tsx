import styles from '../../components/Navbar.module.css'
import { MainLayout } from '../../components/layouts/MainLayout'
import {DarkLayout} from '../../components/layouts/DarkLayout'

export default function ContactPage() {
  return (
    <>
      <h1>Contact page</h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/contact.js</code>
      </p>

    </>
  )
}


ContactPage.getLayout = function getLayout(page:JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}