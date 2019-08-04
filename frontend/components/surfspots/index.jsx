import React from "react";
import SurfspotIndexItem from "./surfspot_index_item";
import SearchBar from "../searchbar/search_bar";

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            surfSpots: []
        }
    }
    
    componentDidMount(){

        this.props.fetchSurfspots()
    }

    render(){
         
         let surfspots = this.props.surfSpots || this.state.surfSpots;
         surfspots = surfspots.map(surfspot=>{
            
            return(
                <SurfspotIndexItem
                    key={surfspot.id}
                    surfspot={surfspot}
                />                    
            )
        });

        return(
            <div>
                <SearchBar/>
                <div className="index-container">
                    <ul className="index-list">
                        {surfspots}
                    </ul>
                </div>
            </div>
        )


    }


}