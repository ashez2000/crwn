import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <Link className="nav-link" href="/">
          Home
        </Link>
      </nav>
    </header>
  );
}
