import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';
// import {logout} from "../../actions/session_actions"

export default ({ currentUser, logout, openModal }) => {
    
    const display = currentUser ? (
        <div className="login-signup">
            <button className="button-link" id="logout-b" onClick={logout}>Logout</button>
            {/* <p id="current-user">{currentUser.first_name}</p> */}
            <h1 className="logo-container">
                <div className="logo" id="userProfilePhoto">
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/1993/1993177.svg" />
                </div>
            </h1>
        </div>
    ) : (
            <nav className="login-signup">
                <button className="button-link" onClick={() => openModal('signup')}>Signup</button>
                <button className="button-link" onClick={() => openModal('login')}>Login</button>           
            </nav>
            
        );
    return (
        <header className="nav-bar">
            <Link to="/" className="header-link">
                <h1 className="logo-container">
                    <div className="logo">
                        <img src={window.surfcamplogoURL}/>
                    </div>
                    <div>
                        Surf Camp
                    </div>
                </h1>
            </Link>
            <div className="nav-bar-right">
                <Link to="/" className="header-link">
                    <label className="nav-bar-links">
                      Camp
                    </label>
                    <label className="nav-bar-links">
                        Host
                    </label>
                    <label className="nav-bar-links">
                        About
                    </label>
                    <label className="nav-bar-links">
                        Help
                    </label>
                </Link>
                {display}
            </div>
        </header>
    )
}