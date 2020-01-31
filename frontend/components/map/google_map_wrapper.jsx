import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './google_map'
import {Marker} from './marker';
import InfoWindow from './info_window';
import {withRouter} from "react-router-dom"

export class GoogleMapContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            surfspots: this.props.surfspots,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    }

 
    componentDidUpdate(prevProps) {
        if(prevProps.surfspots !== this.props.surfspots){
            this.setState({
                surfspots: this.props.surfspots,
                initialCenter: this.props.initialCenter
            });
            this.forceUpdate();
        };
    }

    render() {

        let mapStyles = {
            width: "335px",
            height: "600px"
        };
        

        if(this.props.match.path === "/surfspots/:id"){
            mapStyles.width = `${this.state.windowWidth}px`
        }else if (this.state.windowWidth >= 1300) {
            mapStyles.width = "460px"
            mapStyles.height = `${this.state.windowHeight - 20}px`
        } else if (this.state.windowWidth > 375) {
            mapStyles.width = `${this.state.windowWidth}px`
        };

        let spots = this.props.surfspots.map(spot => {
            let { title, lat, long} = spot;

            return (
                <Marker
                    position={{ lat: lat, lng: long }}
                    key={spot.long}
                >
                    <InfoWindow
                        position={{ lat: lat, lng: long }}
                        title={title}
                        surfspot={spot}
                    />
                </Marker>
            );
        });

        return (
            <div>
                <GoogleMap 
                    initialCenter={this.props.initialCenter}
                    mapStyles={mapStyles} 
                    currentUrl={this.props.match.path}
                    google={this.props.google}>
                    {spots}
            
                </GoogleMap >
            </div>
        );
    };
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAl8TSkkovuXys1EcUJFeDpZVI823ubNRg"),
})(withRouter(GoogleMapContainer));