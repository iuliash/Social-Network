import React from 'react';
import { Link } from 'react-router-dom';

import UserPageMini from './components/User/UserPageMini'

export default function Menu() {
    return (
        <div className="menu">
            <UserPageMini />
            <ul className="navbar-menu">
                <li><Link to='/userPage' className="navbar-menu__item">UserPage</Link></li>
                <li><Link to='/news' className="navbar-menu__item">News</Link></li>
                <li><Link to='/friends' className="navbar-menu__item">Friends</Link></li>
                <li><Link to='/dialogs' className="navbar-menu__item">Dialogs</Link></li>
            </ul>
        </div>
    )
}