import {combineReducers} from  "redux";
import modal from "./modal_reducer";
import geoLocation from "./geo_location_reducer";

const uiReducer = combineReducers({
    modal,
    geoLocation,
});

export default uiReducer;
