import * as SurfSpotsAPIUtil from "../util/surfspots_api_util";

export const RECEIVE_SURFSPOTS = "RECEIVE_SURFSPOTS";
export const RECEIVE_SURFSPOT = "RECEIVE_SURFSPOT";
export const REMOVE_SURFSPOT = "REMOVE_SURFSPOT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
// export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveSurfspots = surfspots =>{
    return({
        type: RECEIVE_SURFSPOTS,
        surfspots,
    })
};
export const receiveSurfspot = surfspot =>{
    return({
        type: RECEIVE_SURFSPOT,
        surfspot,
    })
};

export const removeSurfspot = id =>{
    return({
        type: REMOVE_SURFSPOT,
        id,
    })
};
export const receiveErrors = errors =>{
    return({
        type: RECEIVE_ERRORS,
        errors,
    })
};

export const fetchSurfspots = ()=>dispatch =>{
    
    return(SurfSpotsAPIUtil.fetchSurfspots()
            .then(surfspots => dispatch(receiveSurfspots(surfspots)
        ), err =>(
            dispatch(receiveErrors(err.responseJson))
        )))
};

export const fetchSurfspot = (id)=> dispatch =>(
    SurfSpotsAPIUtil.fetchSurfspot(id)
        .then(surfspot=>(dispatch(receiveSurfspot(surfspot))
        ), err =>(
            dispatch(receiveErrors(err.responseJson))
        ))
);

export const deleteSurfspot = (id)=> dispatch=>(
    SurfSpotsAPIUtil.deleteSurfspot(id).then(surfspot=>
        (dispatch(removeSurfspot(id))
        ), err =>(
            dispatch(receiveErrors(err.responseJson))
        ))
)

export const updateSurfspot = surfspot => dispatch=>(
    SurfSpotsAPIUtil.updateSurfspot(surfspot).then(surfspot=>
        (dispatch(receiveSurfspot(surfspot))
        ), err =>(
           dispatch(receiveErrors(err.responseJson)) 
        ))
)









