import React from "react";
import BookingItem from "./booking_item";
import { withRouter } from "react-router-dom";

class BookingsIndex extends React.Component {


    componentDidMount() {
        const { fetchBookings } = this.props;
        fetchBookings();
    }



    render() {

        let { bookings, deleteBooking } = this.props

        
        if (!bookings.length) {
            bookings =
                <div className="review-item-container">
                    <div className="review-details">
                        <div className="no-reviews show-host-description">
                            You have no Surftrips. <br></br>Lets get you into the liquid!
                    </div>
                    </div>
                </div>
        } else {
            bookings = bookings.map(
                booking => {
                    return (
                        <BookingItem
                            key={booking.id}
                            booking={booking}
                            deleteBooking={deleteBooking}
                        />
                    )
                }
            );
        };

        return (
            <div className="bookings review-container">
                <nav className="create-review-button">
                    <p className="add-reviews">SurfCamp bookings</p>
                </nav>
                <ul className="review-list-container">
                    {bookings}
                </ul>
            </div>
        )
    }

}

export default withRouter(BookingsIndex);