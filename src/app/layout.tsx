import { Toaster } from 'react-hot-toast'

import './bootstrap.css'
import './global.css'

import Provider from './provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'CRWN | Clothing Store',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Provider>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
