export const fetchReviews = (id, user)=>{
    return(
        $.ajax({
            method: "GET",
            url: `api/surfspots/${id}/reviews`,
            data: {user}
        })
    )
}

export const fetchReview = (id)=>{
    return(
        $.ajax({
            method: "GET",
            url: `api/reviews/${id}`
        })
    )
}

export const updateReview = (review) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `api/surfspots/${review.surfspot_id}/reviews/${review.id}`,
            data: {review}
        })
    )
}

export const createReview = (review) => {
    return (
        $.ajax({
            method: "POST",
            url: `api/surfspots/${review.surfspot_id}/reviews`,
            data: {review}
        })
    )
}

export const deleteReview = (id) =>{
    return(
        $.ajax({
            method: "DELETE",
            url: `api/reviews/${id}`
        })
    )
}
