import {connect} from 'react-redux';
import {fetchSurfspot} from '../../actions/surfspots_actions';
import SurfSpotShow from './surfspot_show_page';
import {fetchReviews} from "../../actions/reviews_actions";

const msp = (state, ownProps)=>{

    return({
        surfspot: state.entities.surfSpots[ownProps.match.params.id] 
    })
}

const mdp = dispatch=>{
    return({
        fetchSurfspot: (id)=> dispatch(fetchSurfspot(id)),
        fetchReviews: (id) => dispatch(fetchReviews(id)),
    })
}

export default connect(msp,mdp)(SurfSpotShow);
