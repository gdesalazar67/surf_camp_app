import React from "react";
import {Link} from "react-router-dom";

 const SurfspotIndexItem = ({surfspot})=>{
     
    return(
        <li className="surfspot-container">
            <Link to={`/surfspots/${surfspot.id}`}>
                <img src="http://cdn.cnn.com/cnnnext/dam/assets/130624173927-50-surf-spots-rincon.jpg" className="photo"/>
                <p className="surfspot-title">{`${surfspot.title}`}</p>
                <p className="surfspot-description">{`${surfspot.description}`}</p>
                <p className="surfspot-price">${`${surfspot.price}`}/night</p>
            </Link>
        </li>
    )
}

export default SurfspotIndexItem;