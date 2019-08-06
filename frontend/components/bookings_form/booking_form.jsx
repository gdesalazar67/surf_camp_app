import {withRouter} from "react-router-dom";
import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {format} from 'date-fns';
import {merge} from 'lodash';

export default class BookingForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            num_guest: 1,
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors()
    }

    handleSubmit(event){
        event.preventDefault();

        if(!this.props.currentUserId){
            this.props.openModal('login');
        }else{
            
            let booking = merge({},this.state);
            booking.user_id = currentUserId;
            booking.surfspot_id = this.props.surfspot.id;
            booking.host_id = this.props.surfspot.host_id;

            this.props.createBooking(booking).then(
                this.setState({confirmed: true})
            )
        }
    }

    handleDayClick(inOut){
        event.preventDefault();
        return day=>{
            let selectedDay = format(day, "YYYYMMDD");
            selectedDay = parseInt(selectedDay);
            
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
            <ul className="booking-errrors-container">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="booking-error">{error}</li>
                ))}
            </ul>
        );
    }

    render(){
        return <h1>Working</h1>
    }
}