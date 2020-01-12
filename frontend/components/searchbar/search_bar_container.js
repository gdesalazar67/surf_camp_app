import { receiveGeolocation, fetchGeoCode } from '../../actions/geo_location_actions';
import {fetchSurfspots} from '../../actions/surfspots_actions';
import {connect} from "react-redux";
import SearchBar from "./search_bar";

const mdp = dispatch =>({
    receiveGeolocation: location => dispatch(receiveGeolocation(location)),
    fetchGeoCode: address => dispatch(fetchGeoCode(address)).location,
    fetchSurfspots: searchParams => dispatch(fetchSurfspots(searchParams))

})

export default connect(null, mdp)(SearchBar);