import { combineReducers } from "redux";
import bookings from "./bookings_errors_reducer";
import session from "./session_errors_reducer"

const errorsReducer = combineReducers({
    bookings,
    session,
});

export default errorsReducer;