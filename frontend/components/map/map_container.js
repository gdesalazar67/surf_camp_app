import {connect} from 'react-redux';
import GoogleMapContainer from './google_map_wrapper'
import { fetchSurfspot, fetchSurfspots } from '../../actions/surfspots_actions';
import {fetchGeoCode} from '../../actions/geo_location_actions';

const msp =(state)=>{
    let surfspots = Object.values(state.entities.surfSpots);
    let center = surfspots[0]? 
        { lat: parseFloat(surfspots[0].lat), lng: parseFloat(surfspots[0].long) } : 
        {lat: 33.993118, lng: -118.456200};

    return ({
        surfspots:surfspots,
        location: state.ui.geoLocation.address,
        initialCenter: center
    })
}

const mdp = dispatch=>{

    return ({
        fetchSurfspot: (id)=>dispatch(fetchSurfspot(id)),
        fetchSurfspots: ()=>dispatch(fetchSurfspots()),
        fetchGeoCode: (continent)=>dispatch(fetchGeoCode(continent))
    })
}

export default connect(msp, mdp)(GoogleMapContainer);