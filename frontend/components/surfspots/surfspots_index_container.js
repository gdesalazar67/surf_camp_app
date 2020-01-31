import {connect} from "react-redux";
import {fetchSurfspots} from "../../actions/surfspots_actions";
import Index from './index';

const msp = (state, props)=>{
    
    return({
        surfSpots: Object.values(state.entities.surfSpots),
        searchParams: props.location.search ? props.location.search: nil 
    })
}

const mdp = (dispatch)=>({
    fetchSurfspots: (searchParams)=> dispatch(fetchSurfspots(searchParams)),
})

export default connect(msp, mdp)(Index);