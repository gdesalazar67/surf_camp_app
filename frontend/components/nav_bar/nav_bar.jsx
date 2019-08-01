import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';
// import {logout} from "../../actions/session_actions"

export default ({ currentUser, logout, openModal }) => {
    
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button className="button-link" onClick={logout}>Logout</button>
        </div>
    ) : (
            <nav className="login-signup">
                <button className="button-link" onClick={() => openModal('login')}>Login</button>
               
                <button className="button-link" onClick={() => openModal('signup')}>Signup</button>
            </nav>
        );
    return (
        <header className="nav-bar">
            <Link to="/" className="header-link">
                <h1>Surf Camp</h1>
            </Link>
            <div>
                {display}
            </div>
        </header>
    )
}