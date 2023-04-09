import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <Link className="nav-link" href="/">
          Home
        </Link>

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
    </header>
  );
}
