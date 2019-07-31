import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
            </div>
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