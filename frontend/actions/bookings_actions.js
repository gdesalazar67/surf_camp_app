import * as BookingsAPIUtil from "../util/bookings_api_util";

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveBookings = bookings =>{
    return({
        bookings,
        type: RECEIVE_ALL_BOOKINGS
    })
}


export const receiveBooking = booking => {
    return ({
        booking,
        type: RECEIVE_BOOKING
    })
}
export const removeBooking = id => {
    return ({
        id,
        type: REMOVE_BOOKING
    })
}

export const receiveBookingErrors = errors =>{
    return({
        errors,
        type:RECEIVE_BOOKING_ERRORS
    })
}

export const removeErrors = () => {
    return ({
        type: REMOVE_ERRORS,
    })
};

export const fetchBookings = ()=> dispatch =>(
    BookingsAPIUtil.fetchBookings().then(bookings=>(
        dispatch(receiveBookings(bookings))
    ), err =>(dispatch(receiveBookingErrors(err)))
    )
)
export const fetchBooking = (id)=> dispatch =>(
    BookingsAPIUtil.fetchBooking(id).then(booking=>(
        dispatch(receiveBooking(booking))
    ), err =>(dispatch(receiveBookingErrors(err.responseJSON)))
    )
)

export const deleteBooking = (id)=>dispatch=>(
    BookingsAPIUtil.deleteBooking(id).then(booking=>(
        dispatch(removeBooking(id))
    ), err => (dispatch(receiveBookingErrors(err.responseJSON)))
    )
)

export const createBooking = (booking) => dispatch => (
    BookingsAPIUtil.createBooking(booking).then(booking => {
       return  dispatch(receiveBooking(booking))
    }, err => (dispatch(receiveBookingErrors(err.responseJSON)))
    )
)
export const updateBooking = (booking) => dispatch => (
    BookingsAPIUtil.updateBooking(booking).then(booking => (
        dispatch(receiveBooking(booking))
    ), err => (dispatch(receiveBookingErrors(err.responseJSON)))
    )
)











