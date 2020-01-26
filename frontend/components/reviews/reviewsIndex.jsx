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
        const reviews = Object.values(this.props.reviews)
        let reviewlist;

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
                        />
                    )
                }
            );
        };
      
        return(

            <div className="review-container">
                <nav className="create-review-button">
                    <p className="add-reviews">Tell us about your experience</p>
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