import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="container my-3 d-flex justify-content-between">
      <div className="fw-bold">CRWN</div>
      <div className="d-flex gap-3">
        <Link href="/cart">cart</Link>
      </div>
    </nav>
  )
}
