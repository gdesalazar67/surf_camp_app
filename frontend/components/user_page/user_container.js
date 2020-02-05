import { connect } from "react-redux";
import { fetchReviews } from "../../actions/reviews_actions"
import { fetchBookings } from "../../actions/bookings_actions";
import { fetchSurfspots } from "../../actions/surfspots_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import UserShow from './user_show';

const msp = (state, props) => {
    let {session, entities, ui} = state;
    let params = parseInt(props.match.params.username,10);
    let user = Object.values(entities.users)[0] || null;
    let modal = ui.modal;
    return ({
      session: session.id,
      user: user,
      params: params,
      history: props.history,
      modal: modal
    });
}

const mdp = (dispatch) => ({
  fetchReviews: (id, user) => dispatch(fetchReviews(id,user)),
  fetchBookings: () => dispatch(fetchBookings()),
  fetchSurfspots: (searchParams,hostId) => dispatch(fetchSurfspots(searchParams, hostId)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())

})

export default connect(msp, mdp)(UserShow);