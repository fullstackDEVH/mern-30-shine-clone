import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import {headerLinks, headerTabletLinks} from '../../constant/header';
import { FaCrown } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RiListSettingsFill, RiContactsFill } from 'react-icons/ri';

interface IMyProps {

};

const Header : React.FC<IMyProps> = () => {
    const [showTabletMenu, setShowTabletMenu] = useState<boolean>(false);

    const doShowMenu = () => {
        setShowTabletMenu(pre => !pre)
    };

    return (
        <div className = "header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="logo 30shine" />
                </Link>
            </div>
            <ul className={`header__links ${showTabletMenu ? "active" : ""}`}>
                <div className="header__links_logo">
                    <Link to ="/">
                        <img src={logo} alt="logo 30shine" />
                    </Link>
                </div>
                <div className="header__links_close" onClick={doShowMenu} >
                    <IoClose size={34} />
                </div>
                {
                    !showTabletMenu ? (
                        headerLinks.map((link, i) => (
                            <li className="header__links_item" key={link.path + i}>
                                <Link to = {`${link.path}`}>{link.display}</Link>
                            </li>
                        ))
                    ) : (
                        headerTabletLinks.map((link, i) => (
                            <li className="header__links_item" key={link.path + i}>
                                <Link to = {`${link.path}`} onClick={doShowMenu}>
                                    <RiContactsFill  />
                                    {link.display}
                                </Link>
                            </li>
                        ))
                    )
                   
                }              
                
            </ul>
            <div className="header__sigin">
                <div className="header__sigin_btn">
                    <FaCrown />
                    <span>ĐĂNG NHẬP</span>
                </div>
                <div className="header__sigin_list_icon" onClick={doShowMenu}>
                    <RiListSettingsFill size={24} />
                </div>
            </div>
        </div>
    )
};

export default Header;