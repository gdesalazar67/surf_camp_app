import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class GoogleMap extends React.Component {

    constructor(props) {
        super(props);
        const { lat, lng } = this.props.initialCenter;
        this.state = {
            sticky: "google-map",
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
        this.sticky = this.sticky.bind(this);
    }

    sticky() {
        let div = document.getElementById("google-map")
        let position = div.offsetTop;
        let y = window.pageYOffset;
      
        if (y > (position - 10) && y > 599) {
            this.setState({ sticky: "google-map sticky" });
        } else {
            this.setState({ sticky: "google-map" });
        };
    }
    

    componentDidUpdate(prevProps, prevState){
        
        if(prevProps.google !== this.props.google){
            this.loadMap();
            this.forceUpdate()
        }
        if ((prevState.currentLocation !== this.state.currentLocation) ||
            (prevProps.initialCenter !== this.props.initialCenter)) {
            // this.loadMap();
            // this.forceUpdate();
            // this.forceUpdate()
            this.recenterMap();
        }
    }

    componentDidMount(){    
        // this.centerAroundCurrentLocation();
        this.loadMap();
        // this.forceUpdate()
        window.addEventListener("scroll", this.sticky)
    }

    // centerAroundSurfspot(){
    //     if(this.props.surfspots.length){
    //         let surfspot = this.props.surfspots[0];
    //         let center = {lat: parseFloat(surfspot.lat), lng: parseFloat(surfspot.long)}
    //         this.setState({currentLocation: center})
    //     };
    // }

    // centerAroundCurrentLocation(){
    //     if (this.props.centerAroundCurrentLocation) {
    //         if (navigator && navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition((pos) => {
    //                 const coords = pos.coords;
    //                 this.setState({
    //                     currentLocation: {
    //                         lat: coords.latitude,
    //                         lng: coords.longitude
    //                     }
    //                 });
    //             });
    //         };
    //     };
    // }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.sticky);
    }

    recenterMap(){
        const map = this.map;
        const current = this.props.initialCenter;
        const {google} = this.props;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng)
            map.panTo(center)
            map.setZoom(4)
        }
    }

    loadMap(){

        if(this.props && this.props.google){
            const { google } = this.props;
            const maps = google.maps;

            const node = this.refs.map;
            let { initialCenter, zoom } = this.props;
            const center = new maps.LatLng(initialCenter.lat, initialCenter.lng);
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

        return (
            <div className="google-map-grid-container">
                <div style={this.props.mapStyles} id="google-map" ref="map" className={this.state.sticky}> 
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
    centerAroundCurrentLocation: PropTypes.bool,
    surfspots: PropTypes.array
};
GoogleMap.defaultProps = {
    zoom: 4,
    // venice, by default
    initialCenter: {
        lat: 33.993118,
        lng: -118.456200
    },
    centerAroundCurrentLocation: true,
    surfspots: []
};

