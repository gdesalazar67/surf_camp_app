import React from "react";

export default ()=>{
    return (
        <div className="search-bar-container">
            <h2 className="search-title">Step into liquid.</h2>
            <p className="search-subtext">Book unique camping spots on 
                over <strong>100</strong> beaches where world renowned 
                waves spray at your feet.
            </p>
            <div className="surfcamp-search-widget">
                <div className="search-txt-container">
                    <input type="txt" 
                        className="search-txt" 
                        placeholder="Search..."/>
                </div>
            </div>

        </div>
    )
}
