import {connect} from "react-redux";
import ReviewsIndex from "./reviewsIndex";
import {withRouter} from "react-router-dom";
import {openModal} from "../../actions/modal_actions";
import {fetchReview, fetchReviews, deleteReview} from "../../actions/reviews_actions"

const msp = (state)=>{
    
    return({
        reviews: state.entities.reviews,
        currentUser: state.session.id,
    })

}

const msd = dispatch =>{
    return({
        fetchReviews: (id)=>dispatch(fetchReviews(id)),
        fetchReview: (id)=>dispatch(fetchReview(id)),
        deleteReview: (id)=> dispatch(deleteReview(id)),
        openModal: (modal)=> dispatch(openModal(modal)),
    })
}

export default withRouter(connect(msp, msd)(ReviewsIndex));