import React, { Fragment } from "react";
import PropTypes from 'prop-types';

export class Marker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeMarker: false,
            hardclose: false
        };
        this.mouseOverWindow = false;
        this.timeoutId = null;
        this.isMouseOverWindow = this.isMouseOverWindow.bind(this);
    }
 
    componentWillUnmount() {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        
        if((this.props.map !== prevProps.map) ||
            (this.props.position !== prevProps.position)){
                this.renderMarker();
            };
        if(prevState.activeMarker !== this.state.activeMarker){
            this.renderChildren()
        }
    }

    renderChildren() {
        if (this.props.currentUrl === "/surfspots/:id") return;
        const { map, children, google } = this.props;
        
        if (!children) return;
        return React.Children.map(children, c => {
            if (!c) return;
            let that = this;
            let parantProps = {
                map: map,
                google: google,
                marker: this.marker,
                active: this.state.activeMarker,
                hardclose: this.state.hardclose,
                onMouseOver: ((flag) => this.isMouseOverWindow(flag)),
                onActiveMarker: ((flag) => this.onActiveMarker(flag)),
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
        this.addListeners();
    }

    isMouseOverWindow(flag){
        this.mouseOverWindow = flag;
    }

    
    addListeners(){
        this.marker.addListener("mouseover", () => {
            if(this.timeoutId) clearTimeout(this.timeoutId);
            this.setState({ 
                activeMarker: !this.state.activeMarker,
                hardclose: false 
             });
         });
        this.marker.addListener("mouseout", () => {
            this.timeoutId = setTimeout(() => {
                if(!this.mouseOverWindow){
                    this.setState({
                        activeMarker: !this.state.activeMarker,
                        hardclose: true
                    });
                }
            }, 200);
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


Marker.propTypes = {
    position: PropTypes.object,
    map: PropTypes.object,
    google: PropTypes.object
};

// const eventNames = ['click', 'mouseover'];

// const camelize = function (str) {
//     return str.split(' ').map(function (word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join('');
// };

  // handleEvent(eventType){
    //     return (e) => {
    //         console.log(this.props)

    //         const evtName = `on${camelize(eventType)}`
    //         if (this.props[evtName]) {
    //             this.props[evtName](this.props, this.marker, e);
    //         }
    //     }
    // }