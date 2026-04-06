import {useEffect, useState} from 'react';
import {Link} from 'wouter';
import {useJWT} from './UserStore'
import NavOptionsGuest from './NavOptionsGuest';
import NavOptionsUser from './NavOptionsUser';


export default function NavBar() {
    const {jwt}=useJWT();
    const [isNavBarShowing, setIsNavBarShowing] = useState(false);   

    return (
        <nav className="navbar navbar-expand-lg bg-body-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Book Tracker</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={()=>{
                        if (isNavBarShowing){
                            setIsNavBarShowing(false)
                        }else{
                            setIsNavBarShowing(true)
                        }
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavBarShowing ? "show": ""}`}>
                    {!!jwt ? <NavOptionsUser/> : <NavOptionsGuest/>}
                </div>

            </div>
        </nav>
    )
}