import { combineReducers } from 'redux';

import News from './newsReducer';
import Friends from './friendsReducer';
import Dialogs from './dialogsReducer';
import Users from './users';
import MainUser from './mainUser'


export default combineReducers({
  News, 
  Friends, 
  Dialogs, 
  Users, 
  MainUser
});