import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking, fetchBooking}  from '../../actions/bookings_actions';


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
    })
}

export default connect(null, mdp)(BookingForm);

