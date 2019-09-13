import {connect} from 'react-redux';
import SearchIndexMap from './index_map'
import { fetchSurfspot, fetchSurfspots } from '../../actions/surfspots_actions';

const msp =(state, ownProps)=>{
    debugger
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

export default connect(msp, mdp)(SearchIndexMap);