import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="m-5">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <Link href="/">
                        <Image
                            src="/crwn.svg"
                            alt="crwn logo"
                            width="48"
                            height="48"
                        />
                    </Link>
                </div>
                <nav className="nav">
                    <Link className="nav-link" href="/checkout">
                        Checkout
                    </Link>

                    <Link className="nav-link" href="/signup">
                        Sign Up
                    </Link>

                    <Link className="nav-link" href="/signin">
                        Sign In
                    </Link>
                </nav>
            </div>
        </header>
    )
}
