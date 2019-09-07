import { receiveGeolocation } from '../../actions/geo_location_actions';
import {connect} from "react-redux";
import SearchBar from "./search_bar";

const mdp = dispatch =>({
    receiveGeolocation: location => dispatch(receiveGeolocation(location))
})

export default connect(null, mdp)(SearchBar);