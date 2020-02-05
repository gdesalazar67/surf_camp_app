import React from 'react';
import SurfspotIndexItem from '../surfspots/surfspot_index_item'

 const HostSurfspotsIndex = ({surfspots}) =>{

        let surfspotsDivs;

        if(surfspots.length){
            surfspotsDivs = surfspots.map(surfspot => {
                return (
                    <div className="review-item-container" key={surfspot.id}>
                        <SurfspotIndexItem
                        surfspot={surfspot}
                        />
                    </div>
                );
            });
        }else{
            return(
                <div className="host-no review-item-container">
                    <div className="review-details">
                        <div className="no-reviews show-host-description">
                            You are not hosting any camps <br></br>Sharing is caring!
                    </div>
                    </div>
                </div>
            );
        };

    
       


    return(
        <div className="host-page review-container">
            <nav className="create-review-button">
                <p className="add-reviews">Camps you are hosting</p>
            </nav>
            <ul className="review-list-container">
                {surfspotsDivs}
            </ul>
        </div>
    );
};

export default HostSurfspotsIndex;