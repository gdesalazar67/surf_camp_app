import { receiveGeolocation, fetchGeoCode } from '../../actions/geo_location_actions';
import {connect} from "react-redux";
import SearchBar from "./search_bar";

const mdp = dispatch =>({
    receiveGeolocation: location => dispatch(receiveGeolocation(location)),
    fetchGeoCode: address => dispatch(fetchGeoCode(address))
})

export default connect(null, mdp)(SearchBar);