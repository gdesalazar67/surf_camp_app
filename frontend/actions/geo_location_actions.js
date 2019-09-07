
export const RECEIVE_GEOLOCATION = "RECEIVE_GEOLOCATION";

export const receiveGeolocation = location =>{
    return({
        type: RECEIVE_GEOLOCATION,
        location,
    })
};