import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="page-footer deep-purple lighten-1">
            <div className="footer-copyright">
                <div className="container">
                ©️ {new Date().getFullYear()} All rights are reserved by Zokirkhon
                    <Link className="grey-text text-lighten-4 right" to="/">
                        Repo
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;