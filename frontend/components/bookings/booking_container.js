import { connect } from 'react-redux';
import { fetchBookings, deleteBooking } from "../../actions/bookings_actions";
import BookingsIndex from './bookings_index';
import { withRouter } from "react-router-dom";

const msp = (state) => {

    return ({
        bookings: Object.values(state.entities.bookings) || null
    })
}

const mdp = dispatch => {
    return ({
        fetchBookings: () => dispatch(fetchBookings()),
        deleteBooking: (id) => dispatch(deleteBooking(id))
    })
}

export default withRouter(connect(msp, mdp)(BookingsIndex));