import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking, fetchBooking, removeErrors}  from '../../actions/bookings_actions';
import {openModal} from '../../actions/modal_actions'

const msp = (state, ownProps) =>{
    const surfspot = state.entities.surfspots[ownProps.surfspot.id] ||{};
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

export default connect(null, mdp)(BookingForm);

