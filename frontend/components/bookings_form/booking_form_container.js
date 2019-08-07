import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking, fetchBooking, removeErrors}  from '../../actions/bookings_actions';
import {openModal} from '../../actions/modal_actions'
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) =>{
    debugger
    const surfspot = state.entities.surfSpots[ownProps.match.params.id] || {};
    return({
        currentUserId: state.session.id,
        surfspot,
        errors: state.errors.bookings,

    })
}

const mdp = dispatch=>{
    return({
        createBooking: booking=>dispatch(createBooking(booking)),
        openModal: modal=> dispatch(openModal(modal)),
        removeErrors: ()=>dispatch(removeErrors()),
    })
}

export default withRouter(connect(msp, mdp)(BookingForm));

