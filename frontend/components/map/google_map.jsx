import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {Redirect} from 'react-router-dom';

const mapStyles = {
    width: "400px",
    height: "600px",
}

class GoogleMap extends React.Component {

    constructor(props){
      
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            redirect: false,
            mapCenter:{lat: null},
        }
        this.onMarkerMouseON = this.onMarkerMouseON.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.markerClick = this.markerClick.bind(this);
    }

    // componentDidUpdate(){
    //     console.log("didmount")
    //     
    //     let center = this.props.location.results[0].geometry.location || {};
    //     console.log(center)
    //     if (center !== this.state.mapCenter){
    //         this.setState({
    //             mapCenter: center,
    //         });
    //     }
    // }

    onMarkerMouseON(props, marker, e){ 
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        })
    }

    onMouseOut(props){
        this.setState({
            showingInfoWindow: false,
            activeMarker: null,
        })
    }

    markerClick(){      
        this.setState({redirect: true})   
    }

    initialMapCenter(){
        return this.props.location.results[0].geometry.location
       
        // if(this.state.mapCenter.lat === null){    
        //     console.log("in the null")
        //     return { lat: 31.9685988, lng: -99.9018131 }
        // }else{
        //     console.log("in state.mapcenter")
        // return this.state.mapCenter
        // };
    }
   
    mapIt(){

        return (
            <Map
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={this.props.location.results[0].geometry.location}
                center={this.initialMapCenter()}
            >
                <Marker
                    onMouseover={this.onMarkerMouseON}
                    name={'Surfspot'}
                    position={this.initialMapCenter()}
                    onMouseout={this.onMouseOut}
                    onClick={this.markerClick}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                        <img src="https://image.flaticon.com/icons/svg/651/651140.svg" />
                    </div>
                </InfoWindow>
            </Map>
        )
    }
    
    render() {

        
        if(this.state.redirect === true){
          return <Redirect to='/'/>
        }

        if(this.props.location){
            return (
                <div className="google-map">
                    {this.mapIt()}
                </div>
            )
        }
        return (
            <div className="google-map">
                Loading map...
            </div>
        )
    };
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAl8TSkkovuXys1EcUJFeDpZVI823ubNRg")
})(GoogleMap)