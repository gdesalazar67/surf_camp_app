import * as REVIEWAPIUtil from "../util/reviews_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveAllReviews = (reviews)=>{
    return({
        type: RECEIVE_ALL_REVIEWS,
        reviews,
    })
};
export const receiveReview = (review)=>{
    return({
        type: RECEIVE_REVIEW,
        review,
    })
};

export const removeReview = (reviewId)=>{
    return({
        type: REMOVE_REVIEW,
        reviewId,
    })
};
export const receiveErrors = (errors)=>{
    
    return({
        type: RECEIVE_ERRORS,
        errors,
    })
};




export const fetchReviews = (id, user) => dispatch =>{
    return(
        REVIEWAPIUtil.fetchReviews(id, user).then(reviews=>
            dispatch(receiveAllReviews(reviews)))
    );
};

export const fetchReview = (id) => dispatch =>{
    return(
        REVIEWAPIUtil.fetchReview(id).then(review=>
            dispatch(receiveReview(review)))
    );
};

export const updateReview = (review) => dispatch =>{

    return (
        REVIEWAPIUtil.updateReview(review).then(review =>
            (dispatch(receiveReview(review))
            ), error => (dispatch(receiveErrors(error.responseJSON))
            ))
    );
};

export const createReview = (review) => dispatch =>{

    return (
        REVIEWAPIUtil.createReview(review).then(review =>
            (dispatch(receiveReview(review))
            ), error => (dispatch(receiveErrors(error.responseJSON))
            ))
    );
};

export const deleteReview = (id) => dispatch =>{

    return (
        REVIEWAPIUtil.deleteReview(id).then(review =>
            (dispatch(removeReview(id))
            ), error => (dispatch(receiveErrors(error.responseJSON))
            ))
    );
};










