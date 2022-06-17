import Link from 'next/link';
import { DarkLayout } from '../../components/layouts/DarkLayout';
import { MainLayout } from "../../components/layouts/MainLayout";


export default function pricingPage() {
  return (
    <div>
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>


      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pricing/index.js</code>
      </p>
    </div>
  )
}


pricingPage.getLayout = function getLayout(page:JSX.Element) {

  return (
    <MainLayout>
      <DarkLayout>
      {page}

      </DarkLayout>
    </MainLayout>
  )
}