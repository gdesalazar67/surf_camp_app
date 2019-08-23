import React from "react";
import ReviewItem from "./review_Item";
import {withRouter} from "react-router-dom";

class ReviewsIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        this.props.fetchReviews(this.props.match.params.id)
    }

   
    render(){
        if (!this.props.reviews){
            return null;
        };

        
        const reviewlist = Object.values(this.props.reviews).map(
            review=>{return(
                <ReviewItem
                    key={review.id}
                    review={review}
                    currentUser={this.props.currentUser}
                    deleteReview={this.props.deleteReview}
                    user={this.props.user}
                />
            ) }
        );

        return(

            <div className="review-container">
                <nav className="create-review-button">
                    <button className="button-link" onClick={() => this.props.openModal('reviewModal')}>Tell us about your experiance</button>
                </nav>
                <ul className="review-list-container">
                    {reviewlist}                 
                </ul>
            </div>
        )
    }

}

export default withRouter(ReviewsIndex);