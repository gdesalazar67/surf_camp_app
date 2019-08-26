import React from "react";
import {format} from "date-fns";

const ReviewItem = ({review, currentUser, deleteReview, user})=>{
    let createDate = format(review.created_at, "MMMM Do, YYYY");

    if(currentUser === review.author_id){
        return(
            <div className="review-item-container">
                <div className="review-details">
                    <div className="author-date">
                        <div className="review-author">{review.authorFirstName}</div>
                        <div className="review-date">{createDate}</div>
                    </div>
                    <div className="review-body">{review.body}</div>
                </div>
                <div className="delete">
                    <button
                        className="review-delete-button"
                        onClick={() => deleteReview(review.id)}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }else{
        return (
            <div className="review-item-container">
                <div className="review-details">
                    <div className="author-date">
                        <div className="review-author">{review.authorFirstName}</div>
                        <div className="review-date">{createDate}</div>
                    </div>
                    <div className="review-body">{review.body}</div>
                </div>
            </div>
        )
    }


}

export default ReviewItem;
