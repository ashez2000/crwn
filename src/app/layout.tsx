import '@/styles/bootstrap.css'
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
      <body>{children}</body>
    </html>
  )
}
