export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Book Tracker</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">My Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Sign Out</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}