import { combineReducers } from 'redux';

import Posts from './postsReducer';
import Friends from './friendsReducer';
import Dialogs from './dialogsReducer';
//import Users from './users';
import MainUser from './mainUser'


export default combineReducers({
  Posts, 
  Friends, 
  Dialogs, 
  //Users, 
  MainUser
});