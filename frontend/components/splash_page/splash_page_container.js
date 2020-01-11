import { connect } from "react-redux";
import { fetchSearchSurfspots} from "../../actions/surfspots_actions";
import splashPageCards from './splash_page_cards';

const mdp = (dispatch) => ({
    fetchSearchSurfspots: (searchParams) => dispatch(fetchSearchSurfspots(searchParams)),
})

export default connect(null, mdp)(splashPageCards);