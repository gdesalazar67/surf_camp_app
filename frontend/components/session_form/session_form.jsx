import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        const user = Object.assign({},this.state);
        this.props.processForm(user);
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

    

    render(){

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h2>Welcome back!</h2>
                <br/>
                    <p>It's about time for another surftrip</p>
                 <br/>
                    Please {this.props.formType}
                    {this.renderErrors()}
                <div className="login-form">
                    <br/>
                    <label>
                        <input type="text" value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"/>
                    </label>
                    <br/>
                    <label>
                        <input type="password" value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"/>
                    </label>
                    <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    <br/>
                     {this.props.navLink}

                </div>
                </form>
            </div>
        )
        
    }

} 


export default withRouter(SessionForm);