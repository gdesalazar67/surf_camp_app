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
            this.recenterMap();
            if (this.props.currentUrl === "/surfspots/:id") this.map.setZoom(13);
        }
    }

    componentDidMount(){    
        this.loadMap();
        window.addEventListener("scroll", this.sticky)
    }

  
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
        
            let { initialCenter, zoom, currentUrl } = this.props;
            if (currentUrl === "/surfspots/:id") zoom = 14;
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
        const { children, currentUrl } = this.props;

        if (!children) return;
        return React.Children.map(children, c => {
            if (!c) return;
            let parantProps = {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.initialCenter,
                currentUrl: currentUrl
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

