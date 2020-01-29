import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './google_map'
import {Marker} from './marker';


export class GoogleMapContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            surfspots: this.props.surfspots,
            windowWidth: window.innerWidth
        }
    }


    // setWidth(){
    //     let width = window.innerWidth;
    //     if(width >= 1300){
    //         this.setState({mapStyles: 
    //             { width:"460px", height: "600px"}   
    //         });
    //     }else if(width > 375){
    //         this.setState({
    //             mapStyles:
    //                 { width: `${width}px`, height: "600px" }
    //         });
    //     };
    // }
    
    componentDidUpdate(prevProps, prevState) {

        if(prevProps.surfspots !== this.props.surfspots){
            console.log("in update wrapper")
            this.setState({surfspots: this.props.surfspots})
        }
    }


    render() {


        let mapStyles = {
            width: "335px",
            height: "600px"
        };

        if (this.state.windowWidth >= 1300) {
                mapStyles.width = "460px"
        } else if (this.state.windowWidth > 375) {
                mapStyles.width = `${this.state.windowWidth}px`
        };
         console.log(mapStyles)
        let spots = this.props.surfspots.map(spot => {
            let { lat, long } = spot;
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