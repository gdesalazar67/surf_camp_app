import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import bookings_index from "./bookings_index";

const BookingItem = ({ booking, deleteBooking }) => {

    let check_in = format(booking.check_in, "MMMM Do, YYYY");
    let check_out = format(booking.check_out, "MMMM Do, YYYY");

    return (
        <div className="review-item-container">
            <div className="review-details">
                <div className="author-date">
                    <div className='host-container'>
                        <div className="host-photo"><img src={booking.photos[0]}/></div>
                        <div className="hosted-by-container">
                            <Link to={`/surfspots/${booking.surfspot_id}`}>
                                <p className="hosted-by">{booking.title}:<span> {booking.description}</span></p>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="hosted-by">Check in:<span> {check_in}</span></p>
                <p className="hosted-by">Check out:<span> {check_out}</span></p>
                <p className="hosted-by">num of guest:<span> {booking.num_guest}</span></p>
                <p className="hosted-by">Hosted by:<span> {booking.host}</span></p>
            </div>
            <div className="delete">
                <button
                    className="review-delete-button"
                    onClick={() => deleteBooking(booking.id)}>
                    Delete
                </button>
            </div>
        </div>
    )

};

export default BookingItem;