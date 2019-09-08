import * as GeoCodeAPIUtil from "../util/geoCoder_api_util"

export const RECEIVE_GEOLOCATION = "RECEIVE_GEOLOCATION";

export const receiveGeolocation = location =>{
    return({
        type: RECEIVE_GEOLOCATION,
        location,
    })
};

export const fetchGeoCode = address=> dispatch =>{
    GeoCodeAPIUtil.fetchGeoCode(address).then(locationData=>
        dispatch(receiveGeolocation(locationData))
    )
}