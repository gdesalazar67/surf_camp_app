import {connect} from 'react-redux';
import SearchIndexMap from './index_map'
import { fetchSurfspot, fetchSurfspots } from '../../actions/surfspots_actions';

const msp =(state, ownProps)=>{
    return ({
        surfspots: Object.values(state.entities.surfSpots)
    })
}

const mdp = dispatch=>{

    return ({
        fetchSurfspot: (id)=>dispatch(fetchSurfspot(id)),
        fetchSurfspots: ()=>dispatch(fetchSurfspots()),
    })
}

export default connect(msp, mdp)(SearchIndexMap);