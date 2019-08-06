import { RECEIVE_BOOKING_ERRORS, RECEIVE_BOOKING, REMOVE_ERRORS} from "../actions/bookings_actions";
import { merge } from "lodash";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKING_ERRORS:
            return merge([], action.errors);
        case RECEIVE_BOOKING:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};