import {Link, useLocation} from 'wouter';
import {useJWT} from './UserStore';

export default function NavOptionsUser(props) {
    const [location] =useLocation();
    const {clearJWT} = useJWT();

    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link disabled" href="#">My Books</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${location == "/profile" ? "active" : ""}`} href="/profile">Account</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/" onClick={()=>{
                    clearJWT();
                    alert("You have logged out of your account.")
                }}>Log Out</Link>
            </li>
        </ul>
    )
}