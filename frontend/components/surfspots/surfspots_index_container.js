import {connect} from "react-redux";
import {fetchSurfspots} from "../../actions/surfspots_actions";
import Index from './index';

const msp = (state)=>{
    
    return({
        surfSpots: Object.values(state.entities.surfSpots)
    })
}

const mdp = (dispatch)=>({
    fetchSurfspots: ()=> dispatch(fetchSurfspots()),
})

export default connect(msp, mdp)(Index);