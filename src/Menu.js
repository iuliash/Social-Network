import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import UserPageMini from './components/User/UserPageMini'

export default class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.menuRef.current.className = 'menu';
        this.forceUpdate();
    }

    componentWillUpdate(){
        setTimeout(() => {
            this.props.menuRef.current.className = 'menu menu-open';
        }, 2);
    }

    render(){
        return (
            <div className= "menu" ref={this.props.menuRef}>
                <UserPageMini />
                <ul className="navbar-menu">
                    <li onClick={this.props.changeVisibleMenu}><Link to='/userPage' className="navbar-menu__item">UserPage</Link></li>
                    <li onClick={this.props.changeVisibleMenu}><Link to='/news/1' className="navbar-menu__item">News</Link></li>
                    <li onClick={this.props.changeVisibleMenu}><Link to='/friends' className="navbar-menu__item">Friends</Link></li>
                    <li onClick={this.props.changeVisibleMenu}><Link to='/dialogs' className="navbar-menu__item">Dialogs</Link></li>
                </ul>
            </div>
        )
    }
}