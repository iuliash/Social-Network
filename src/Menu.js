import React from 'react';
import { Link } from 'react-router-dom';

import UserPageMini from './components/User/UserPageMini'

export default class Menu extends React.Component {
    componentDidMount(){
        this.props.menuRef.current.className = 'menu';
        this.forceUpdate();
    }

    componentWillUpdate(){
        setTimeout(() => {
            this.props.menuRef.current.className = 'menu menu_isOpen';
        }, 1);
    }

    render(){
        return (
            <div className= "menu" ref={this.props.menuRef}>
                <UserPageMini />
                <ul className="navbar">
                    <li onClick={this.props.changeVisibleMenu}><Link to='/userPage' className="navbar__item">UserPage</Link></li>
                    <li onClick={this.props.changeVisibleMenu}><Link to='/news/1' className="navbar__item">News</Link></li>
                    <li onClick={this.props.changeVisibleMenu}><Link to='/friends' className="navbar__item">Friends</Link></li>
                    <li onClick={this.props.changeVisibleMenu}><Link to='/dialogs' className="navbar__item">Dialogs</Link></li>
                </ul>
            </div>
        )
    }
}