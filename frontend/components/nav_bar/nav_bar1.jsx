import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(){
        super();

        this.state = {
            isHidden: true
        };
        this.toggleHidden = this.toggleHidden.bind(this);
    };

    renderUser(){
        console.log(this.props)
       let user = this.props.currentUser ? (
        <div className="login-signup">
            <button className="button-link" id="logout-b" onClick={this.props.logout}>Logout</button>
            <button className="icon button-link" id="logout-b" onClick={() => this.props.history.push({
                pathname: `/user/${this.props.currentUser}`})}>
                <div className="host-photo"><img src="https://www.flaticon.com/premium-icon/icons/svg/1993/1993177.svg" /></div>
            </button>
            {/* <p id="current-user">{currentUser.first_name}</p> */}


            {/* <h1 className="logo-container">
                <div className="logo" id="userProfilePhoto">
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/1993/1993177.svg" />
                </div>
            </h1> */}
        </div>
    ) : (
            <nav className="login-signup">
                <button className="button-link" onClick={() => this.props.openModal('login')}>Sign In</button>
                <button className="button-link" onClick={() => this.props.openModal('signup')}>Sign Up</button>
            </nav>

        );
        return user
    };

    toggleHidden(event) {
        event.preventDefault();

        this.setState({
            isHidden: !this.state.isHidden
        });
    };

    renderDropDown(){

        let collapse = this.state.isHidden ? "iscollapsed nav-bar-right" : "nav-bar-right";
        return(
            <div className={collapse}>
                <button className="button-link" onClick={this.toggleHidden}>
                    <div className="change">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </button>
                <div className="header-link">
                    <Link to="/" className="nav-bar-links">
                        Camp
                        </Link >
                    <label className="nav-bar-links">
                        Host
                        </label>
                    <label className="nav-bar-links">
                        About
                        </label>
                    <label className="nav-bar-links">
                        Help
                        </label>
                </div>
                {this.renderUser()}
            </div>
        );
    };

    render(){


        return (
            <header className="nav-bar" >
                <button className="button-link" onClick={this.toggleHidden}>
                    <div className="hamburger-icon-wrapper">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </button>
                <Link to="/" className="header-link">
                    <h1 className="logo-container">
                        <div className="logo-text">SURFC<span className="letter">A</span>MP</div>
                        <div className="logo">
                            <img src={window.surfcamplogoURL} />
                        </div>
                    </h1>
                </Link>
                {this.renderDropDown()}
            </header>
        )
    }

}
export default withRouter(Navbar);




