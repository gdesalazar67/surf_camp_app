import React from 'react';
import SearchBar from '../searchbar/search_bar';
import GoogleMap from './google_map';



export default class SurfSpotsIndexSearchMap extends React.Component{

 constructor(props){
     super(props)
 }

    render(){

        debugger
        return(
        <div className="searchIndexMap-container">
            <SearchBar/>
            <div className="index-map-container">
                <div className="moveover">hello move over</div>
                <GoogleMap/>
            </div>
        </div>
        )
    };
}