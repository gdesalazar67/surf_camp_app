import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class GoogleMap extends React.Component {

    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }
    

    componentDidUpdate(prevProps, prevState){
        if(prevProps.google !== this.props.google){
            this.loadMap();
            this.forceUpdate()
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }
    componentDidMount(){
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            };
        };
        this.loadMap();
        this.forceUpdate()
    }

    recenterMap(){
        const map = this.map;
        const current = this.state.currentLocation;
        const {google} = this.props;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng)
            map.panTo(center)
        }
    }

    loadMap(){

        if(this.props && this.props.google){
            const { google } = this.props;
            const maps = google.maps;

            const node = this.refs.map;
            // const node = ReactDOM.findDOMNode(mapRef);
            let {lat, lng} = this.state.currentLocation;
            let { zoom } = this.props;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom,
                mapTypeId: maps.MapTypeId.TERRAIN
            });
            this.map = new maps.Map(node, mapConfig);            
        };

    }


    renderChildren() {
        const { children } = this.props;

        if (!children) return;
        return React.Children.map(children, c => {
            if (!c) return;
            let parantProps = {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.initialCenter
            }
            return React.cloneElement(c, parantProps);
        });
    }

    render() {
        // this.setWidth();

        return (
            <div className="google-map-grid-container">
                <div style={this.props.mapStyles} ref="map" className="google-map"> 
                    {this.renderChildren()}
                    Loading map...
                </div>
            </div>
        );
   
    };
};

GoogleMap.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    centerAroundCurrentLocation: PropTypes.bool
};
GoogleMap.defaultProps = {
    zoom: 8,
    // venice, by default
    initialCenter: {
        lat: 33.993118,
        lng: -118.456200
    },
    centerAroundCurrentLocation: true
};

