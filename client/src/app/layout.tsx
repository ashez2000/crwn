import Navbar from '@/components/navbar'
import Provider from '@/components/provider'

import '@/styles/global.css'

export const metadata = {
  title: 'CRWN | Clothing Store',
  icons: {
    icon: '/crwn.svg',
  },
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <header>
            <Navbar />
          </header>
          <main className="main-container">{children}</main>
        </Provider>
      </body>
    </html>
  )
}
