import {connect} from 'react-redux';
import SearchIndexMap from './index_map'
import { fetchSurfspot } from '../../util/surfspots_api_util';

const msp =(state, ownProps)=>{

    return ({
        surfspots: state.entities.surfSpots
    })
}

const mdp = dispatch=>{

    return ({
        fetchSurfspot: (id)=>dispatch(fetchSurfspot(id))
    })
}

export default connect(msp, mdp)(SearchIndexMap);