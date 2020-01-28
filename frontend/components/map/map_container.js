import {connect} from 'react-redux';
import GoogleMapContainer from './google_map_wrapper'
import { fetchSurfspot, fetchSurfspots } from '../../actions/surfspots_actions';

const msp =(state, ownProps)=>{
    
    return ({
        surfspots: Object.values(state.entities.surfSpots),
        location: state.ui.geoLocation.address,
    })
}

const mdp = dispatch=>{

    return ({
        fetchSurfspot: (id)=>dispatch(fetchSurfspot(id)),
        fetchSurfspots: ()=>dispatch(fetchSurfspots()),
    })
}

export default connect(msp, mdp)(GoogleMapContainer);