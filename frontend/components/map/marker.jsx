import React, { Fragment } from "react";
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

    handleEvent(eventType){
        return (e) => {
            console.log(e)
            const evtName = `on${camelize(eventType)}`
            if (this.props[evtName]) {
                this.props[evtName](this.props, this.marker, e);
            }
        }
    }

    renderChildren() {
        const { map, children, google } = this.props;
        
        if (!children) return;
        return React.Children.map(children, c => {
            if (!c) return;
            let parantProps = {
                map: map,
                google: google,
                marker: this.marker,
            }
            return React.cloneElement(c, parantProps);
        });
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

        eventNames.forEach(e => {
            this.marker.addListener(e, this.handleEvent(e));
        });
    }



    render() {
        return (
            <Fragment>
                {this.renderChildren()}
            </Fragment>
        )
    }
};

const eventNames = ['click', 'mouseover'];

const camelize = function (str) {
    return str.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
};

Marker.propTypes = {
    position: PropTypes.object,
    map: PropTypes.object,
    google: PropTypes.object
};