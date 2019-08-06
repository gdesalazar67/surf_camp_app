import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking}  from '../../actions/bookings_actions';


const msp = state =>{

}

const mdp = dispatch=>{
    return({
        createBooking: booking=>dispatch(createBooking(booking)),
    })
}

export default connect(null, mdp)(BookingForm);