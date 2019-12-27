import React from 'react';
import { Link } from 'react-router-dom';

import close from './img/menu-close.jpg'
import open from './img/menu-open.jpg'

export default function Logo(props) {
    return (
        <div className="header">
            <div className="header__logo">
                <img 
                    ref={props.logoRef}
                    src={props.visibleMenu ? open : close} 
                    className="logo__img"
                    onClick={props.changeVisibleMenu}
                />
                <div>
                    <p><Link to='/news/1' className="logo__text">Social.Net</Link></p>
                </div>
            </div>
        </div>
    )
}