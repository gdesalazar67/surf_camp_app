import * as REVIEWAPIUtil from "../util/reviews_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

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

export const deleteReview = (reviewId)=>{
    return({
        type: DELETE_REVIEW,
        reviewId,
    })
};
export const receiveErrors = (errors)=>{
    return({
        type: RECEIVE_ERRORS,
        errors,
    })
};

export const receiveReviews = (reviews)=>{
    return({
        type: RECEIVE_REVIEWS,
        reviews,
    })
};


export const fetchReviews = (id) => dispatch =>{
    return(
        REVIEWAPIUtil.fetchReviews(id).then(reviews=>
            dispatch(receiveAllReviews(reviews)))
    );
};

export const fetchReview = (id) => dispatch =>{
    return(
        REVIEWAPIUtil.fetchReview(id).then(review=>
            dispatch(receiveReview(review)))
    );
};

export const updateReview = (review) => disptach =>{

    return (
        REVIEWAPIUtil.updateReview(review).then(review =>
            (dispatch(receiveReview(review))
            ), error => (disptach(receiveErrors(error.responseJson))
            ))
    );
};

export const createReview = (review) => disptach =>{

    return (
        REVIEWAPIUtil.createReview(review).then(review =>
            (dispatch(receiveReview(review))
            ), error => (disptach(receiveErrors(error.responseJson))
            ))
    );
};

export const deleteReview = (id) => disptach =>{

    return (
        REVIEWAPIUtil.deleteReview(id).then(review =>
            (dispatch(deleteReview(id))
            ), error => (disptach(receiveErrors(error.responseJson))
            ))
    );
};










