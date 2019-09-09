import {RECEIVE_GEOLOCATION} from "../actions/geo_location_actions";
import {merge} from "lodash";

const geoLocationReducer = (state = {}, action)=>{
    Object.freeze(state);
    let newState;

    switch(action.type){
       case RECEIVE_GEOLOCATION:
        newState = merge({},{address: action.location})
        return newState;
       default:
        return state;
    }
}

export default geoLocationReducer;
