import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';

class SurfspotIndexItem extends React.Component{
     constructor(props){
         super(props);
        }
        // this.handleClick = this.handleClick.bind(this);

    //  handleClick() {
    //       
    //      const surfspotId = this.props.surfspot.id;
    //      this.props.push(`/surfspots/${surfspotId}`);
    //  }
    // onClick = { this.handleClick }
   
    render(){

        return(
            
            <li className="surfspot-container" >
                <div className="photo-index-card">
                <Link to={`/surfspots/${this.props.surfspot.id}`}>
                        <img src={this.props.surfspot.photos[2]} className="photo"/>
                </Link>   
                </div>
                <Link to={`/surfspots/${this.props.surfspot.id}`}>               
                    <p className="surfspot-title">{`${this.props.surfspot.title}`}</p>
                    <p className="surfspot-description">{`${this.props.surfspot.description}`}</p>
                    <p className="surfspot-price">${`${this.props.surfspot.price}`}/night</p>
                </Link>  
            </li>
        )
    }
}

export default withRouter(SurfspotIndexItem);