import { NavLink } from 'react-router-dom';

import { Logo } from "./Logo"
import { Searcher } from './Searcher';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <a className="navbar-brand">
            <Logo />
        </a>

        <div className="navbar-collapse">
            <div className="navbar-nav">
                <NavLink
                    className={({isActive}) => 
                        `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/" 
                >
                    Home
                </NavLink>

                <NavLink
                    className={({isActive}) => 
                    `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/about"
                >
                    About
                </NavLink>

                <NavLink
                    className={({isActive}) => 
                    `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/blog"
                >
                    Blog
                </NavLink>

                <NavLink
                    className={({isActive}) => 
                    `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/contact"
                >
                    Contact
                </NavLink>
            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <Searcher />
        </div>
    </nav>
  )
}
