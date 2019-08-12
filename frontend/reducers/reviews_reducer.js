import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from "../actions/reviews_actions";
import {merge} from "lodash";

export default (state = {}, action)=>{
    Object.freeze(state);
    let newState;
    switch (action.type){
        case RECEIVE_ALL_REVIEWS:
            newState = merge({}, state, action.reviews)
            return newState;
        case RECEIVE_REVIEW:
            newState = merge({}, state, {[action.review.id]: action.review});
            return newState;
        case REMOVE_REVIEW:
            newState = merge({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}
