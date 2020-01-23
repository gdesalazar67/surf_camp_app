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
        event.preventDefault();
        // this.props.receiveGeolocation(event.target.firstChild.value);
        // this.props.fetchGeoCode(event.target.firstChild.value);

        let searchTerm = this.state.searchParams;
        event.currentTarget.children[0].firstChild.value = "";

        if(this.props.match.path === "/index"){
            this.props.location.search = `?query=${searchTerm}`
            this.props.fetchSurfspots(searchTerm)
        }else{
            console.log(this.props)
            this.props.history.push({ pathname: "/index", search: `?query=${searchTerm}` });
        }
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
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="search-txt-container">
                        <input type="txt" 
                            className="search-txt" 
                            placeholder="Search..."
                            value={this.state.searchParams}
                            onChange={this.update}
                        />
                    </div>
                    <input className="search-submit" type="submit" value="Search"/>
                </form>   
            </div>

        </div>
    )
  }
}
export default withRouter(SearchBar);
