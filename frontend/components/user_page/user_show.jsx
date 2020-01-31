import React from "react";
import {Link} from "react-router-dom";


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
        }
        
    }

     noUser() {

        return (
            <div>
                log in please
            </div>
        );
    }

     validUser () {
        return (
            <div>
                hello, you valid 
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