import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="deep-purple lighten-1">
                <div className="nav-wrapper deep-purple lighten-1">
                    <Link to="/" className="brand-logo">
                        React Shop
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contacs">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;