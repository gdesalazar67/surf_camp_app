import React from "react";
import ProfileCard from "../user_page/profile_card";
// import CreateSurfspotForm from "./create_surfspot_container";
import HostSurfspots from './host_surfspots'

class HostCreate extends React.Component {

    componentDidMount() {
        if(this.props.user){
            this.props.fetchSurfspots(null, this.props.user.id)
        }
    }

    componentDidUpdate(prevProps){
       
            if(prevProps.user !== this.props.user){
                if(this.props.user){
                    this.props.fetchSurfspots(null, this.props.user.id)
                };
            };
        
    }

    authenticateUser() {

        let { session, user, params } = this.props;

        if (session && (session === user.id)) {
            if (session === params) {
                return true;
            } else {
                this.props.history.push({
                    pathname: `/user/host/${session}`
                });
            };
        } else {
            return false;
        };
    }

    noUser() {
        let{openModal} = this.props;
        openModal('login');
        return (
            <div className="user-login" />
        );
    }

    validUser() {
        let { modal, closeModal,surfspots,user: { first_name, photo } } = this.props
        if(modal) closeModal();
        return (
            <div className="valid-user">
                <ProfileCard
                    first_name={first_name}
                    photo={photo}
                />
                <div className="host-index-container">
                   <HostSurfspots surfspots={surfspots}/>
                </div>
            </div>
        );
    }

    renderShow() {
        if (this.authenticateUser()) {
            return this.validUser();
        } else {
            return this.noUser();
        };
    }

    render() {

        return (
            this.renderShow()
        )
    }
};

export default HostCreate;