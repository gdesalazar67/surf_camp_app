import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import UserShow from './user_show';

const msp = (state, props) => {
    let {session, entities} = state;
    let params = parseInt(props.match.params.username,10);
    let user = Object.values(entities.users)[0] || null;

    return ({
      session: session.id,
      user: user,
      params: params,
      history: props.history,
    });
}

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(msp, mdp)(UserShow);