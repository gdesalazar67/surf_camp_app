import {RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING}from "../actions/bookings_actions";
import {merge} from 'lodash';

const bookingsReducer = (state = {}, action)=>{
    Object.freeze(state);
    let newState;

    switch(action.type){
        case RECEIVE_ALL_BOOKINGS:
            newState = merge({}, state, action.bookings);
            return newState;
        case RECEIVE_BOOKING:
            newState = merge({}, state, action.booking);
            return newState;
        case REMOVE_BOOKING:
            newState = merge({}, state);
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default bookingsReducer;

