import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';
// import {logout} from "../../actions/session_actions"

export default ({ currentUser, logout, openModal }) => {
    
    const display = currentUser ? (
        <div className="login-signup">
            <button className="button-link" onClick={logout}>Logout</button>
            <p className="button-link">{currentUser.first_name}</p>
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
                <h1>Surf Camp</h1>
            </Link>
            <div className="nav-bar-right">
                <label className="nav-bar-links">
                    <a href="https://www.hipcamp.com/discover">Camp</a>
                </label>
                <label className="nav-bar-links">
                    <a href="https://www.hipcamp.com/host">Host</a>
                </label>
                <label className="nav-bar-links">
                    <a href="/">About</a>
                </label>
                <label className="nav-bar-links">
                    <a href="https://support.hipcamp.com/hc/en-us">Help</a>
                </label>
                {display}
            </div>
        </header>
    )
}