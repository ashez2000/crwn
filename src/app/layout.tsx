import './bootstrap.css'
import './global.css'

import Provider from './provider'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'CRWN | Clothing Store',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <Header />
                    <main className="container">{children}</main>
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}
