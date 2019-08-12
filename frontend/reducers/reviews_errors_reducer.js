import { RECEIVE_ERRORS, RECEIVE_REVIEW } from "../actions/reviews_actions";
import { merge } from "lodash";

export default (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ERRORS:
           return  merge([], action.errors);
        case RECEIVE_REVIEW:
            return [];
        default:
            return state;
    }
};