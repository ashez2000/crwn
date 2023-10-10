import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="main-container my-3 flex justify-between">
      <div className="font-bold">CRWN</div>
      <div className="flex gap-3">
        <Link href="/cart">cart</Link>
        <Link href="/signup">signup</Link>
      </div>
    </nav>
  )
}
