import React from "react";
import {format} from "date-fns";
import {Link} from "react-router-dom";

const ReviewItem = ({review, currentUser, deleteReview, userProfile})=>{
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

    let page = userProfile ?
        <Link  to={`/surfspots/${review.surfspot_id}`}>
            <p className="hosted-by">{review.surfspot_title}</p>
        </Link>
        : <p className="hosted-by">{review.authorFirstName}<span> recommends this listing.</span></p>;

    let imgUrl = userProfile ? review.surfspot_photos[0] : review.authorPhoto;

    let userProfileReview = userProfile ? <div className="show-host-description">{review.body}</div> : null;
    let showReview = userProfile ? null : <div className="show-host-description">{review.body}</div>;


    return(
        <div className="review-item-container">
            <div className="review-details">
                <div className="author-date">
                    <div className='host-container'>
                        <div className="host-photo"><img src={imgUrl} /></div>
                        <div className="hosted-by-container">
                            {page}
                            <p className="review-date">{createDate}</p>
                            {userProfileReview}
                        </div>
                    </div>
                </div>
                {showReview}
            </div>
            {deleteButton}
        </div>
    )

}

export default ReviewItem;
