import React from "react";
import SurfspotIndexItem from "./surfspot_index_item";
import SearchBar from "../searchbar/search_bar_container";

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            surfSpots: []
        }
    }
    
    componentDidMount(){

        this.props.fetchSurfspots(this.props.searchParams)
    }

    resultText(zero){
        if(!zero){
            return <p className="search-txt2 result">No sites found.  Try something like cali, barrel, or bay</p>

        }
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
                <div className="index-grid-container">
                    <p className="search-txt2">Peep it...</p>
                    <p className="search-txt2 result">Search results for "{this.props.searchParams.split("=")[1].replace(/[^A-Z]/ig, " ")}"</p>
                    {this.resultText(surfspots.length)}
                        <ul className="index-grid">
                            {surfspots}
                        </ul>
                </div>
            </div>
        )


    }


}