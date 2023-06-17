import './bootstrap.css'
import './global.css'

export const metadata = {
    title: 'CRWN | Clothing Store',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
