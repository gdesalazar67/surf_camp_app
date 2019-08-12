import { combineReducers } from 'redux';
import users from './users_reducer';
import surfSpots from './surfspots_reducer';
import bookings from './bookings_reducer';
import reviews from './reviews_reducer';

export default combineReducers({
    users, 
    surfSpots,
    bookings,
    reviews,
});