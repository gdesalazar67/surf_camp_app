import {RECEIVE_SURFSPOTS, RECEIVE_SURFSPOT, REMOVE_SURFSPOT } from "../actions/surfspots_actions";
import {merge} from "lodash";

const surfSpotsReducer =(state = {}, action)=>{
    Object.freeze(state);
    let newState = {};
    switch(action.type){
        case RECEIVE_SURFSPOTS:
            
            newState = merge({}, state, action.surfspots);
            return  newState;
        case RECEIVE_SURFSPOT:
            newState = merge({}, {[action.surfspot.id]: action.surfspot});
            return newState;
        case REMOVE_SURFSPOT:
            newState = merge({}, state);
            newState.delete(action.id);
            return newState;
        default:
            return state;
    }
}

export default surfSpotsReducer;