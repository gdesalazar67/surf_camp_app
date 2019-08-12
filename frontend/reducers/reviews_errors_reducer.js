export { RECEIVE_ERRORS, RECEIVE_REVIEW } from "../actions/reviews_actions";
export { merge } from "lodash";

export default (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ERRORS:
            newState = merge([], action.errors)
            return newState;
        case RECEIVE_REVIEW:
            return [];
        default:
            return state;
    }
}