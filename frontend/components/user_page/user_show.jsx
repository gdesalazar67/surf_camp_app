import React from "react";
import {Link} from "react-router-dom";
import ProfileCard from "./profile_card";
import BookingsIndex from "../bookings/booking_container"
import ReviewsIndex from "../reviews/reviews_index_container"


class UserShow extends React.Component {

    componentDidMount(){
        this.props.fetchReviews(null, true)
        this.props.fetchSurfspots(null, this.props.user.id)
    }
 
    authenticateUser () {
        let {session, user, params} = this.props;

        if (session && (session === user.id)){
            if (session === params){
                return true;
            } else {
                this.props.history.push({
                    pathname: `/user/${session}`
                });
            };
        }else{
            return false;
        };
    }

     noUser() {
        this.props.openModal('login') 
        return (
            <div className="user-login"/>
        );
    }

     validUser () {
         this.props.closeModal();
         let{user: {first_name, photo}} = this.props
        return (
           <div className="valid-user">
                <ProfileCard 
                    first_name={first_name}
                    photo={photo}
                />
                <div>
                    <BookingsIndex/>
                    <ReviewsIndex userProfile={true}/>
                </div>
           </div>
        );
    }

    renderShow(){
        if(this.authenticateUser()){
            return this.validUser();
        }else{
            return this.noUser();
        };
    }

    render(){

        return (
           this.renderShow()
        )
    }
};

export default UserShow;