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
      </nav>
    </header>
  );
}
