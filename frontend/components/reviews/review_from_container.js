import {connect} from "react-redux";
import{withRouter} from "react-router";
import {createReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";
import {closeModal } from '../../actions/modal_actions'

const msp = (state, ownProps)=>{
    const surfspot = state.entities.surfSpots[ownProps.match.params.id] || {};
    return({
        surfspot,
        formType: "createReview",
        errors: state.entities.errors.reviews,
        currentUser: state.session.id, 
    });
}

const mdp = (dispatch)=>{
    return({
        createReview: (review)=>dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal()),
    });
}

export default withRouter(connect(msp,mdp)(ReviewForm));

