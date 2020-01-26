import React from "react";
import {format} from "date-fns";

const ReviewItem = ({review, currentUser, deleteReview, user})=>{
    let createDate = format(review.created_at, "MMMM Do, YYYY");

    let deleteButton;

    if(currentUser === review.author_id){
        deleteButton = 
            <div className="delete">
                <button
                    className="review-delete-button"
                    onClick={() => deleteReview(review.id)}>
                    Delete
                    </button>
            </div>
    };

    return(
        <div className="review-item-container">
            <div className="review-details">
                <div className="author-date">
                    <div className='host-container'>
                        <div className="host-photo"><img src="https://www.flaticon.com/premium-icon/icons/svg/1993/1993177.svg" /></div>
                        <div className="hosted-by-container">
                            <p className="hosted-by">{review.authorFirstName}<span> recommends this listing.</span></p>
                            <p className="review-date">{createDate}</p>
                        </div>
                    </div>
                </div>
                <div className="show-host-description">{review.body}</div>
            </div>
            {deleteButton}
        </div>
    )

}

export default ReviewItem;
