import {connect} from "react-redux";
import{withRouter} from "react-router-dom";
import {createReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";

const msp = (state)=>{
    
    const surfspot = state.entities.surfSpots[Object.keys(state.entities.surfSpots)[0]];
    
    return({
        surfspot,
        formType: "createReview",
        errors: state.errors.reviews,
        currentUserId: state.session.id, 
    });
}

const mdp = (dispatch)=>{
    return({
        processForm: (review)=>dispatch(createReview(review)),
    });
}

export default withRouter(connect(msp,mdp)(ReviewForm));

