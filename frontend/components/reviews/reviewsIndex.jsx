import React from "react";
import ReviewItem from "./review_Item";
import {withRouter} from "react-router-dom";

class ReviewsIndex extends React.Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        let {fetchReviews, match} = this.props;
        let {id} = match.params;

        if(id){
            fetchReviews(id);
        };
    }

    onClick(){
        if(!this.props.currentUser){
          return  this.props.openModal('login')
        }else{
            return this.props.openModal('reviewModal')
        }
    }

   
    render(){

        let {reviews, userProfile} = this.props

        reviews = Object.values(reviews);
        let reviewlist;
        let header;

        if (!reviews.length){
            reviewlist = 
            <div className="review-item-container">
                <div className="review-details">
                    <div className="no-reviews show-host-description">
                        This listing has no reviews yet. <br></br>If you stayed here and have some insider info for us, let us know!
                    </div>
                </div>
            </div>
        }else{
            reviewlist = reviews.map(
                review => {
                    return (
                        <ReviewItem
                            key={review.id}
                            review={review}
                            currentUser={this.props.currentUser}
                            deleteReview={this.props.deleteReview}
                            user={this.props.user}
                            userProfile={userProfile}
                        />
                    )
                }
            );
        };

        header = userProfile ? 
            <div className="review-container">
                <nav className="create-review-button">
                    <p className="add-reviews">Reviews you've left</p>
                    {/* <button className="review-button-link" onClick={this.onClick}>Review</button> */}
                </nav>
                <ul className="review-list-container">
                    {reviewlist}
                </ul>
            </div>
            : <div className="review-container">
                <nav className="create-review-button">
                    <p className="add-reviews">Tell us about your experience</p>
                    <button className="review-button-link" onClick={this.onClick}>Review</button>
                </nav>
                <ul className="review-list-container">
                    {reviewlist}
                </ul>
            </div>;

        return(
            header

            // <div className="review-container">
            //     <nav className="create-review-button">
            //         <p className="add-reviews">Tell us about your experience</p>
            //         <button className="review-button-link" onClick={this.onClick}>Review</button>
            //     </nav>
            //     <ul className="review-list-container">
            //         {reviewlist}                 
            //     </ul>
            // </div>
        )
    }

}

export default withRouter(ReviewsIndex);