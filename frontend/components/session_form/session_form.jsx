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
                        placeholder="First name"
                        required
                        />
                </div>
    
                <div className="login-form-fields">
                    <input type="text" value={this.state.last_name}
                        onChange={this.update('last_name')}
                        className="login-input" 
                        placeholder="Last name"
                        required
                        />
                </div>
            </div>
            ) }
    }

    renderZipcode(){
        const type = this.props.formType;
        if (type === "signup"){
            return(
                <div>
                    <div className="login-form-fields">
                        <input type="number" value={this.state.zip_code}
                            onChange={this.update('zip_code')}
                            className="login-input" 
                            placeholder="zipcode"
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
            <h2 className="login-big-title">Join Surfcamp</h2>
            <p className="login-small-title">Discover the best surfspots near you</p>
           </div>)
        }else {
            return ( 
            <div>
             <h2 className="login-big-title">Waves be calling!</h2>
             <p className="login-small-title">It's about time for another surftrip</p>
            </div>)
        }
    };

    renderLink(){
        const type = this.props.formType;
        if(type === "signup"){
           return (
           <div>
                Already a memember?&nbsp;{this.props.otherForm}    
           </div>)
        }else {
            return ( 
            <div>
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
                            placeholder="email"
                            required
                            />
                    </div>
                   
                    <div className="login-form-fields">
                        <input type="password" value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder="password"
                            required
                            />
                    </div>
                    {this.renderZipcode()}
                   
                     <input className="session-submit" type="submit" value={this.props.formType} />
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