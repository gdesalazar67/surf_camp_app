import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            zip_code: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }


    componentWillUnmount(){
        this.props.removeErrors()
    }
    handleSubmit(event){
        event.preventDefault();
        const user = Object.assign({},this.state);
        this.props.processForm(user);
    }
    
    demoSubmit(event){
        
        event.preventDefault();
        const user ={
            email: "demo1@gmail.com",
            password: "1234567"
        }
        this.props.demoLogin(user);
    }

    update(field){
        return event =>this.setState({
            [field]: event.currentTarget.value
        });
    }

    renderErrors(){
        
        return(
            <ul>
                {this.props.errors.map((error, i)=>(
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    renderSignInNames(){
        
        const type = this.props.formType;
        if (type === "signup"){
           return( 
           <div>
                 <div className="login-form-fields">
                    <input type="text" value={this.state.first_name}
                        onChange={this.update('first_name')}
                        className="login-input" 
                        placeholder="First name..."
                        required
                        />
                </div>
    
                <div className="login-form-fields">
                    <input type="text" value={this.state.last_name}
                        onChange={this.update('last_name')}
                        className="login-input" 
                        placeholder="Last name..."
                        required
                        />
                </div>
            </div>
            )};
    };

    renderZipcode(){
        const type = this.props.formType;
        if (type === "signup"){
            return(
                <div>
                    <div className="login-form-fields">
                        <input type="number" value={this.state.zip_code}
                            onChange={this.update('zip_code')}
                            className="login-input" 
                            placeholder="Zipcode..."
                            required
                            />
                    </div>
                </div>
            )
        }
    }

    renderGreeting(){
        const type = this.props.formType;
        if(type === "signup"){
           return (
           <div>
            <div className="logo-text">SURFC<span className="letter">A</span>MP</div>
                <h2 className="login-big-title">Search, discover, and book<br></br>Everywhere you want to surfcamp.</h2>
           </div>)
        }else {
            return ( 
            <div>
                <div className="logo-text">Welcome back<span className="letter">!</span></div>
                    <h2 className="login-big-title">Waves are calling!<br></br>Time for another surftrip</h2>
            </div>)
        }
    };

    renderButtontext(){
        const type = this.props.formType;
        if (type === "signup") {
            return ("Join Surfcamp")
               
        } else {
            return ("Log in")
        }
    }

    renderLink(){
        const type = this.props.formType;
        if(type === "signup"){
           return (
           <div className="other-link">
                Already a Surf Camper?&nbsp;{this.props.otherForm}    
           </div>)
        }else {
            return ( 
            <div className="other-link">
                not a memember?&nbsp;{this.props.otherForm}             
            </div>)
        }
    };

    

    


    render(){

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.renderGreeting()}
                    {this.renderErrors()}
                <div className="login-form">
                   
                    {this.renderSignInNames()}
                    <div className="login-form-fields">
                        <input type="text" value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Email..."
                            required
                            />
                    </div>
                   
                    <div className="login-form-fields">
                        <input type="password" value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder="Password..."
                            required
                            />
                    </div>
                    {this.renderZipcode()}
                   
                     <input className="session-submit" type="submit" value={this.renderButtontext()} />
                    <button onClick={this.demoSubmit}>
                        <input className="demo-button" type="submit" value="Demo Login" required/>
                    </button>
                     {this.renderLink()}
                </div>
                </form>
            </div>
        )
        
    }

} 


export default withRouter(SessionForm);