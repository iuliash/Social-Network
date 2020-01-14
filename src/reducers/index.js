import { combineReducers } from 'redux';

import Posts from './postsReducer';
import Dialogs from './dialogsReducer';
import MainUser from './mainUser'


export default combineReducers({
  Posts, 
  Dialogs,  
  MainUser
});