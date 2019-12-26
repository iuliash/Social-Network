import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import News from './components/NewsFeed/News'
import UserPage from './components/User/UserPage'
import FriendsList from './components/Friends/FriendsList'
import Dialogs from './components/Dialogs/Dialogs'


export default function Main() {
    return(
        <main>
            <Switch>
                <Route path='/news/:id' component={News}/>
                <Route path='/userPage' component={UserPage}/>
                <Route path='/friends' component={FriendsList}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/' render={() => (<Redirect to='/news/1' />)} />
            </Switch>
        </main>
    )
}   

