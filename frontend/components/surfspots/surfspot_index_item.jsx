import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';

class SurfspotIndexItem extends React.Component{
     constructor(props){
         super(props);
        }
    
   
    render(){

        return(
            
            <li className="surfspot card-container" >
                <div className="surfspot card">
                    <Link className="surfspot link" to={`/surfspots/${this.props.surfspot.id}`}>
                        <div className="surfspot image-container">
                            <img src={this.props.surfspot.photos[2]} className="photo"/>
                        </div>
                    </Link>    
                    <div className="surfspot caption-container">
                        <Link to={`/surfspots/${this.props.surfspot.id}`}>  
                            <div className="title-description-container">
                                <p className="surfspot-title">{`${this.props.surfspot.title}`}</p>
                                <p className="surfspot-description">{`${this.props.surfspot.description}`}</p>
                            </div>             
                            <div className="price-info">
                                {/* <div className="thumbs-up">
                                    <img src="https://image.flaticon.com/icons/svg/651/651140.svg"/>
                                </div> */}
                                <p className="surfspot-price">${`${this.props.surfspot.price}`}/night</p>
                            </div>
                        </Link>  
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(SurfspotIndexItem);