import React from "react";
import {withRouter} from 'react-router-dom';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchParams: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);        
        this.update = this.update.bind(this);
    }


    handleSubmit(event){
        debugger 
        event.preventDefault();
        // this.props.receiveGeolocation(event.target.firstChild.value);
        this.props.fetchGeoCode(event.target.firstChild.value);
        this.props.history.push("/surfspots");
    };

    update(e){
        this.setState({
            searchParams: e.currentTarget.value,
        });
    };

  render(){
    return (
        <div className="search-bar-container">
            <h2 className="search-title">Step into liquid.</h2>
            <p className="search-subtext">Book unique camping spots on 
                over <strong>100</strong> beaches where world renowned 
                waves spray at your feet.
            </p>
            <div className="surfcamp-search-widget">
                <div className="search-txt-container">
                    <div className='row'>
                        <div className="magnify-glass">
                            <img src="https://image.flaticon.com/icons/svg/54/54990.svg"/>
                        </div>
                    </div>
                    <form  onSubmit={this.handleSubmit}>
                        <input type="txt" 
                            className="search-txt" 
                            placeholder="503 maintance"
                            value={this.state.searchParams}
                            onChange={this.update}
                        />
                     
                        <input className="search-submit" type="submit" value="Search"/>
                  </form>
                </div>
            </div>

        </div>
    )
  }
}
export default withRouter(SearchBar);
