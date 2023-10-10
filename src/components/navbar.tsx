import { getAuthPayload } from '@/helpers/get-auth'
import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  const auth = getAuthPayload()

  return (
    <nav className="main-container my-3 flex justify-between">
      <div className="font-bold">CRWN</div>
      <div className="flex gap-3">
        <Link href="/cart">cart</Link>

        {!auth && (
          <>
            <Link href="/signin">signin</Link>
          </>
        )}
      </div>
    </nav>
  )
}
