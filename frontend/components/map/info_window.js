import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import InfoWindowCard from './info_window_card'

export class InfoWindow extends React.Component {


    componentWillUnmount() {
        if (this.infoWindow) {
            this.infoWindow.setMap(null);
        }
    }

    componentDidUpdate(prevProps){
        console.log("hello window update")
        if ((this.props.map !== prevProps.map) ||
            (this.props.marker !== prevProps.marker)) {
            this.renderInfoWindow();
        };
    }

    renderInfoWindow(){
        // console.log(this.props);
        let{map, marker, google, title, surfspot, position} = this.props;
        if(!google) return null;
        let center = {lat: parseFloat(position.lat), lng: parseFloat(position.lng)}
        this.infowindow = new google.maps.InfoWindow({
            content: "<div id="+`"${title}"`+"/>",
            position: center,
            maxWidth: 150,
            pixelOffset: new google.maps.Size(0, -20)
        });
        this.infowindow.addListener('domready', e =>{
            let div = document.getElementById(title)
            ReactDom.render(
                    <InfoWindowCard
                        key={surfspot.id}
                        surfspot={surfspot}
                    />, 
                    div
                );
        });

        // this.infowindow.open(map, marker);
    }

    render(){
        return null;
    }
};

InfoWindow.propTypes = {
    position: PropTypes.object,
    title: PropTypes.string,
    surfspot: PropTypes.object,
    google: PropTypes.object
};
