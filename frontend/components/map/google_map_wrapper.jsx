import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './google_map'
import {Marker} from './marker';

let mapStyles = {
    width: "335px",
    height: "600px"
};


export class GoogleMapContainer extends React.Component {

    // setWidth(){
    //     let width = window.innerWidth;

    //     if(width >= 1300){
    //         mapStyles.width = "460px";
    //     }else if(width > 375){
    //         mapStyles.width = `${width}px`;
    //     }
    // }
    constructor(props){
        super(props);
        this.state = {
            surfspots: this.props.surfspots
        }
    }
    // state = {
    //     surfspots: this.props.surfspots
    //     // mapStyles: {
    //     //     width: "335px",
    //     //     height: "600px"
    //     // }
    // }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.surfspots !== this.props.surfspots){
            console.log("in update wrapper")
            this.setState({surfspots: this.props.surfspots})
        }
    }


    render() {
        // this.setWidth();
        console.log("in here wrapper")
        
        let spots = this.props.surfspots.map(spot => {
            let { lat, long } = spot;
            console.log("in map")
            return (
                <Marker
                    position={{ lat: lat, lng: long }}
                    key={spot.long}
                />
            );
        });

        return (
            <div>
                <GoogleMap 
                    mapStyles={mapStyles} 
                    google={this.props.google}>
                    {spots}
                </GoogleMap >
            </div>
        );
    };
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAl8TSkkovuXys1EcUJFeDpZVI823ubNRg"),
})(GoogleMapContainer);