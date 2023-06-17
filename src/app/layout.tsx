import './bootstrap.css'
import './global.css'

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
                <main className="container">{children}</main>
            </body>
        </html>
    )
}
