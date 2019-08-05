import {connect} from 'react-redux';
import {fetchSurfspot} from '../../actions/surfspots_actions';
import SurfSpotShow from './surfspot_show_page';

const msp = (state, ownProps)=>{
    
    return({
        surfspot: state.entities.surfSpots[ownProps.match.params.id],  
    })
}

const mdp = dispatch=>{
    return({
        fetchSurfspot: (id)=> dispatch(fetchSurfspot(id)),
    })
}

export default connect(msp,mdp)(SurfSpotShow);
