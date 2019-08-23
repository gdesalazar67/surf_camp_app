import React from 'react';
import  {withRouter} from 'react-router-dom';
import {merge} from 'lodash';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            body: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    }

    handleSubmit(event){

        event.preventDefault();
        
        let review = merge({}, this.state);
        review.author_id = this.props.currentUserId;
        review.surfspot_id = this.props.surfspot.id;
        this.props.processForm(review);

        }

    renderErrors() {

        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render(){

        debugger
        return(
            <div className="review-form-container">
                <p className="review-form-title">{`${this.props.surfspot.title}`}</p>
                    <form className="review-text area" onSubmit={this.handleSubmit}>
                        <textarea onChange={this.update('body')} className="review-form-input"
                         placeholder="Tell us about your experiance"
                         value={this.state.body}
                         rows="10"
                         col="10"
                        />
                    <input className="create-review-submit" type="submit" value="Submit Review" />
                    <div className="booking_error_message">{this.renderErrors()}</div>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm);
