import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(){
        super();

        this.state = {
            isHidden: true
        };
        this.toggleHidden = this.toggleHidden.bind(this);
        this.onclick = this.onclick.bind(this);
        this.onClickHost = this.onClickHost.bind(this);
    };


    onclick(event){
        event.preventDefault();
        let {push} = this.props.history;
        
        push({
            pathname: `/user/${this.props.currentUser}`
        });
        if(!this.state.isHidden) this.setState({isHidden: true});
    }

     onClickHost(event){
         event.preventDefault()
        let { push } = this.props.history;
        
        push({pathname: '/user/host/12'})
         if (!this.state.isHidden) this.setState({ isHidden: true });
    }

    logoutSubmit(event){
        event.preventDefault();
        let{ currentUser, logout, history, location} = this.props

        logout()

        if(location.pathname === `/user/${currentUser.id}` ||
            location.pathname === `/user/host/${currentUser.id}`){
            history.push({
                pathname: `/`
            });
            // if (!this.state.isHidden) this.setState({ isHidden: true });
        };
    }


    renderUser(){
        let {currentUser} = this.props
       let user = currentUser ? (
        <div className="login-signup">
            <button className="button-link" id="logout-b" onClick={()=> this.logoutSubmit(event)}>Logout</button>
            <button className="icon button-link" id="logout-b" onClick={() => this.onclick(event)}>
                <div className="host-photo"><img src={currentUser.photo} /></div>
            </button>
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
        // console.log(this.props)

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
                    <div onClick={() => this.onClickHost(event)} className="nav-bar-links">
                        Host
                        </div>
                    {/* <label className="nav-bar-links">
                        About
                        </label>
                    <label className="nav-bar-links">
                        Help
                        </label> */}
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




