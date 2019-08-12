import React from "react";
import {Link} from 'react-router-dom';
import {format} from "date-fns";

const ReviewItem = ({review, currentUser, deleteReview, user})=>{
    const createDate = format(review.created_at, "MMMM Do YYYY");

    if(currentUser === review.author_id){
        return(
            <div className="review-item-container">
                <div className="review-details">
                    <div className="author-date">
                        <div className="review-author">{review.first_name}</div>
                        <div className="review-date">{createDate}</div>
                    </div>
                    <div className="review-body">{review.body}</div>
                </div>
                <div className="edit-delete">
                    <Link
                        className="link-edit"
                        to={`/api/reviews/${review.id}`}>
                        Edit
                     </Link>
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
                        <div className="review-author">{review.first_name}</div>
                        <div className="review-date">{createDate}</div>
                    </div>
                    <div className="review-body">{review.body}</div>
                </div>
            </div>
        )
    }


}

export default ReviewItem;
