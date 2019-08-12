import {connect} from "react-redux";
import ReviewsIndex from "./reviewsIndex";
import {withRouter} from "react-router";
import {fetchReview, fetchReviews, deleteReview} from "../../actions/reviews_actions"

const msp = (state)=>{
    
    return({
        reviews: state.entities.reviews,
        currentUser: state.session.id,
    })

}

const msd = dispatach =>{
    return({
        fetchReviews: (id)=>dispatach(fetchReviews(id)),
        fetchReview: (id)=>dispatach(fetchReview(id)),
        deleteReview: (id)=> dispatach(deleteReview(id)) 
    })
}

export default withRouter(connect(msp, msd)(ReviewsIndex));