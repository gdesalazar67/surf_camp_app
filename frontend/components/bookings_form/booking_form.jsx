import {withRouter} from "react-router-dom";
import React from "react";

export default class BookingForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            num_guest: 1,
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

    }

    handleDayClick(event){
        event.preventDefault();

    }

    render(){
        return <h1>Working</h1>
    }
}