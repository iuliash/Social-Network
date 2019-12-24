import React from 'react';
import { Switch, Route } from 'react-router-dom';
 
 //<Route path='/messages' component={Messages}/>

import News from './components/NewsFeed/News'
import UserPage from './components/User/UserPage'
import FriendsList from './components/Friends/FriendsList'
import Dialogs from './components/Dialogs/Dialogs'


export default function Main() {
    return(
        <main>
            <Switch>
                <Route exact path='/news' component={News}/>
                <Route path='/userPage' component={UserPage}/>
                <Route path='/friends' component={FriendsList}/>
                <Route path='/dialogs' component={Dialogs}/>
            </Switch>
        </main>
    )
    
}

