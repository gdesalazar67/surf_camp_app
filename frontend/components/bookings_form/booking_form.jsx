// used David Yoon Campaway clone as referance on how to set up calander 

import {withRouter} from "react-router-dom";
import React from "react";
import { formatDate, parseDate } from 'react-day-picker/moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {format} from 'date-fns';
import {merge} from 'lodash';

class BookingForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            num_guest: 1,
            sticky: "widget_container"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.sticky = this.sticky.bind(this);
    }
    
    componentDidMount(){
        window.addEventListener("scroll", this.sticky)
    }

    componentWillUnmount() {
        this.props.removeErrors();
        window.removeEventListener("scroll", this.sticky);
    }

    sticky(){
        let div = document.getElementById("bookings-widget")
        let position = div.offsetTop;
        let y = window.pageYOffset;

        if (y > position && y > 491) {
            this.setState({ sticky: "widget_container sticky" });
        } else {
            this.setState({ sticky: "widget_container" });
        };
    }

     
    handleSubmit(event){     
        event.preventDefault();

        if(!this.props.currentUserId){
            this.props.openModal('login');
        }else{
            
            let booking = merge({},this.state);
            booking.user_id = this.props.currentUserId;
            booking.surfspot_id = this.props.surfspot.id;
            booking.host_id = this.props.surfspot.host_id;
            
            this.props.createBooking(booking);
        }
    }

    handleDayClick(inOut){
        return day=>{
            let selectedDay = format(day, "YYYY-MM-DD");          
            this.setState({[inOut]: selectedDay});     
        };
    }

    handleNumGuest(plusMinus) {
        return event => {
            if ((plusMinus === '+') && (this.state.num_guest + 1 <= this.props.surfspot.max_guest)) {
                this.setState({ num_guest: (this.state.num_guest += 1) });
            } else if ((plusMinus === '-') && (this.state.num_guest - 1 >= 1)) {
                this.setState({ num_guest: (this.state.num_guest -= 1) });
            }
        }
    }


    renderErrors() {
       
            return (
                <ul className="booking-errors-container">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="booking-error">{error}</li>
                    ))}
            </ul>
            );
        // }
    }

    dayAfterCheckIn(day) {
        const nextDay = new Date(day)
        nextDay.setDate(day.getDate() + 2)
        return nextDay
    }

    render(){
        
        const today = new Date();
        const {surfspot} = this.props;

        let checkIn;

        if(this.state.check_in){
            checkIn = this.dayAfterCheckIn(new Date(this.state.check_in))
        } else{
             checkIn = this.dayAfterCheckIn(today)
        }
        

        

        return (
            
            <div id="bookings-widget" className={this.state.sticky}>
                <form onSubmit={this.handleSubmit}>
                    <div className="booking_widget">
                        <div className="booking_banner">
                            <h2 className="price">${surfspot.price}</h2>
                            <p id="widget_per_night">per night</p>
                        </div>
                        <div className="booking_well">
                            <div className="well_dates_guests">
                                <div className="booking_checkin">
                                    <div className="label">Check in</div>
                                    <DayPickerInput
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        onDayChange={this.handleDayClick('check_in')}
                                        placeholder="Select Date"
                                        dayPickerProps={{
                                            disabledDays: {
                                                before: today
                                            }
                                        }}
                                    />
                                </div>
                                <div className="booking_checkout">
                                    <div className="label">Check out</div>

                                    <DayPickerInput
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        onDayChange={this.handleDayClick('check_out')}
                                        placeholder="Select Date"
                                        dayPickerProps={{
                                            month: checkIn,
                                            disabledDays: {
                                                before: checkIn
                                            }
                                        }}
                                    />
                                </div>

                                <div className="booking_guests">
                                    <div className="label">Guests</div>
                                    <div className="widget_guests">
                                        <a onClick={this.handleNumGuest('-')}>-</a>
                                        <p className="booking_num_guests">{this.state.num_guest}</p>
                                        <a onClick={this.handleNumGuest('+')}>+</a>
                                    </div>
                                </div>
                            </div>

                            <div className="booking_error_message">{this.renderErrors()}</div>

                            <div className="booking_submit">
                                <input className="widget_button" type="submit" value="Check availability"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
        
}
export default BookingForm;