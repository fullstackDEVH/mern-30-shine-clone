import React from 'react';
import {Link} from 'react-router-dom';
// import logo from '../../assets/logo.jpg';

const Header = () => {
    return (
        <div className = "header">
            <div className="header__logo">
                <Link to="/">
                    <img src="" alt="logo 30shine" />
                </Link>
            </div>
            <div className="header__links">

            </div>
            <div className="header__form_sigin">

            </div>
        </div>
    )
};

export default Header;