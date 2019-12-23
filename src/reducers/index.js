import { combineReducers } from 'redux';

import News from './newsReducer';
import Friends from './friendsReducer';
import Messages from './messagesReducer';
import Users from './users';
import MainUser from './mainUser'


export default combineReducers({
  News, 
  Friends, 
  Messages, 
  Users, 
  MainUser
});