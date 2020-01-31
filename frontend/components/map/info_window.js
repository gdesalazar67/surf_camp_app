import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import InfoWindowCard from './info_window_card'
import { withRouter } from "react-router-dom"


class InfoWindow extends React.Component {

    constructor(props){
        super(props);   
            this.state = {
                active: false
            }
    }

    componentWillUnmount() {
        if (this.infoWindow) {
            this.infoWindow.setMap(null);
        }
    }

    componentDidUpdate(prevProps, prevState){
       
        if ((this.props.map !== prevProps.map) ||
            (this.props.marker !== prevProps.marker)) {
            this.renderInfoWindow();
        };

        if (this.props.active !== prevProps.active){
            this.setState({active: true})
        }
        if (prevState.active !== this.state.active) {
            if(this.state.active){
                this.infowindow.open(this.props.map, this.props.marker);
            }else{
                this.infowindow.close();
            };
        };

        if(this.props.hardclose !== prevProps.hardclose){
            if(this.props.hardclose) this.mouseLeave();
        }

    }
  
    mouseLeave(){
        this.setState({active: false});
        this.props.onMouseOver(false)
    }
    mouseOver(){
        this.props.onMouseOver(true)
    }
    onClick(){
        this.props.history.push({
            pathname: `/surfspots/${this.props.surfspot.id}`});
    }


    renderInfoWindow(){
        let{google, title, surfspot, position} = this.props;
        if(!google) return null;
        let center = {lat: parseFloat(position.lat), lng: parseFloat(position.lng)}

        this.infowindow = new google.maps.InfoWindow({
            content: "<div id="+`"${title}"`+"/>",
            position: center,
            maxWidth: 150,
        });

        this.infowindow.addListener('domready', e =>{
            let div = document.getElementById(title)
            div.addEventListener("mouseleave", () => { this.mouseLeave()});
            div.addEventListener("mouseover", ()=>{this.mouseOver()});
            div.addEventListener("click", ()=>{this.onClick()});
            console.log("add listner")
            ReactDom.render(
                    <InfoWindowCard
                        key={surfspot.id}
                        surfspot={surfspot}
                    />, 
                    div
                );
        });

    }



     

    render(){
        return null;
    }
};

export default withRouter(InfoWindow);

InfoWindow.propTypes = {
    position: PropTypes.object,
    title: PropTypes.string,
    surfspot: PropTypes.object,
    google: PropTypes.object
};
