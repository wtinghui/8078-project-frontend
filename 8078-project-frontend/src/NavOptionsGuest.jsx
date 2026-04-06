import {Link, useLocation} from 'wouter'

export default function NavOptionsGuest() {
    const [location] =useLocation();
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className={`nav-link ${location == "/login" ? "active" : ""}`} href="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${location == "/about" ? "active" : ""}`} href="/about">About</Link>
            </li>
        </ul>
    )
}