import React from "react";
import {Link} from "react-router-dom";

export default ({continent, tag, url}) =>{

    return(
        <div className="card-container">
            <div className="card">
                <Link to={{pathname: "/index", search: `?query=${continent}`}} className="link">
                    <div className="image-container">
                        <img src={url} />
                        <div className="word-wrapper">
                            <div className="location-box">
                               <div>{continent}</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="caption-container">
                    <h3 >
                        <Link to="/index">{continent}</Link>
                    </h3>
                    <div className="subtext">{tag}</div>
                </div>
            </div>
        </div>
    )
}