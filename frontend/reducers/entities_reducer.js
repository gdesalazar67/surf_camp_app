import { combineReducers } from 'redux';
import users from './users_reducer';
import surfSpots from './surfspots_reducer';

export default combineReducers({
    users, 
    surfSpots,
});