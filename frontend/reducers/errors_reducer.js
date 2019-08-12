import { combineReducers } from "redux";
import bookings from "./bookings_errors_reducer";
import session from "./session_errors_reducer";
import reviews from "./reviews_errors_reducer";

const errorsReducer = combineReducers({
    bookings,
    session,
    reviews,
});

export default errorsReducer;