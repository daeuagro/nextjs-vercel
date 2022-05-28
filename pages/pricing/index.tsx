import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout'



export default function PricingPage() {
  return (
      <MainLayout>
         <h1>Pricing page</h1>
        <h1 className={'title'}>
          Go <Link href="/pricing">About</Link>
          {/* Ir a <a href="/about">About</a> */}
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing</code>
        </p>
      </MainLayout>
  )
}