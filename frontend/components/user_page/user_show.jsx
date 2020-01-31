import React from "react";
import {Link} from "react-router-dom";
import ProfileCard from "./profile_card"


class UserShow extends React.Component {
 
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
        return (
           <div className="valid-user">
               <ProfileCard first_name={this.props.user.first_name}/>
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