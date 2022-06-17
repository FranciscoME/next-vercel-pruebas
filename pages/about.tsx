import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import styles from '../components/layouts/MainLayout.module.css'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>


      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page:JSX.Element) {

  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )

}




export default AboutPage