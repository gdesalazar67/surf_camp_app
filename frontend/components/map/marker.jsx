import React from "react";
import PropTypes from 'prop-types';

export class Marker extends React.Component {

 
    componentWillUnmount() {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }


    componentDidUpdate(prevProps) {
        
        if((this.props.map !== prevProps.map) ||
            (this.props.position !== prevProps.position)){
                this.renderMarker();
            };
    }

    renderMarker() {

        let { map, google, mapCenter, position} = this.props;
        if(!google) return null;
        let pos = position || mapCenter;

        position = new google.maps.LatLng(pos.lat, pos.lng);
        const pref = {
            map: map,
            position: position
        };
        this.marker = new google.maps.Marker(pref);
    }



    render() {
        return null
    }
}

Marker.propTypes = {
    position: PropTypes.object,
    map: PropTypes.object
};