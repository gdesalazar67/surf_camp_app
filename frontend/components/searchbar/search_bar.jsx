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
                    <div className='row'>
                    <div className="magnify-glass">
                        <img src="https://image.flaticon.com/icons/svg/54/54990.svg"/>
                    </div>
                    <input type="txt" 
                        className="search-txt" 
                        placeholder="Search..."/>
                    </div>
                    <input className="search-submit" type="submit" value="Search"/>
                </div>
            </div>

        </div>
    )
}
