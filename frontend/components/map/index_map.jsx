import React from 'react';
import SearchBar from '../searchbar/search_bar_container';
import GoogleMap from './google_map';
import SurfSpotIndex from '../surfspots/surfspot_index_item'



export default class SurfSpotsIndexSearchMap extends React.Component{

 constructor(props){
     super(props)
 }


    componentDidMount() {
        
        this.props.fetchSurfspots()
    }



    render(){
        let surfspots = this.props.surfspots || [];
       
        surfspots = surfspots.map(surfspot => {
            return (
                <SurfSpotIndex
                key={surfspot.id}
                surfspot={surfspot}
                />
                )
            });     
        
        return(
        <div className="searchIndexMap-container">
            <SearchBar/>
            <div className="index-map-container">
                <div className="index-container">
                    <ul className="index-list">
                        {surfspots}
                    </ul>
                </div>
                <GoogleMap surfspots={this.props.surfspots}/>
            </div>
        </div>
        )
    };
}