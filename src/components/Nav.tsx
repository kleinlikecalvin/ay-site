import Link from "next/link";
import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="Nav">
      <Link href="/" className="logo-cont">
        <div className="logo"></div>
        <h1>Anaheim Youtopia</h1>
      </Link>
      <div>
        <Link href="/donate">Donate</Link>
        <Link href="/volunteer">Volunteer</Link>
        <Link href="/events">Events</Link>
        <Link href="/about">About AY</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
