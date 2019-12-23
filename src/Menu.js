import React from 'react';
import { Link } from 'react-router-dom';

import UserPageMini from './components/User/UserPageMini'

export default function Menu() {
        return (
            <div>
                <UserPageMini />
            <div>
                <ul>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/userPage'>UserPage</Link></li>
                <li><Link to='/friends'>Friends</Link></li>
                <li><Link to='/messages'>Messages</Link></li>
                </ul>
            </div>
            </div>
            
        )
    
    
}