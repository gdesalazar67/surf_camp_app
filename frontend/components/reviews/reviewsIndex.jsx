import React from "react";
import ReviewItem from "./review_Item";
import {withRouter} from "react-router-dom";

class ReviewsIndex extends React.Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        
        this.props.fetchReviews(this.props.match.params.id)
    }

    onClick(){
        if(!this.props.currentUser){
          return  this.props.openModal('login')
        }else{
            return this.props.openModal('reviewModal')
        }
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
                    <p className="add-reviews">Tell us about your experiance</p>
                    <button className="review-button-link" onClick={this.onClick}>Review</button>
                </nav>
                <ul className="review-list-container">
                    {reviewlist}                 
                </ul>
            </div>
        )
    }

}

export default withRouter(ReviewsIndex);