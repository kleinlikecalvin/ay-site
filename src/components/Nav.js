import "./Nav.css";
export default function Nav() {
  return (
    <nav className="Nav">
      <a href="/home" className="logo-cont">
        <div className="logo"></div>
        <h1>Anaheim Youtopia</h1>
      </a>
      <ul>
        <a href="/home">
          <li>Home</li>
        </a>
        <a href="/donate">
          <li>Donate</li>
        </a>
        <a href="/volunteer">
          <li>Volunteer</li>
        </a>
        <a href="/events">
          <li>Events</li>
        </a>
        <a href="/about">
          <li>About AY</li>
        </a>
        <a href="/contact">
          <li>Contact Us</li>
        </a>
      </ul>
    </nav>
  );
}
