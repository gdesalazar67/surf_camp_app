import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchSurfspots } from "../../actions/surfspots_actions";
import HostCreate from './host_page';

const msp = (state, props) => {
    let { session, entities, ui} = state;
    let params = parseInt(props.match.params.id, 10);
    let user = Object.values(entities.users)[0] || null;
    let surfspots = entities.surfSpots ? Object.values(entities.surfSpots): [];
    let modal = ui.modal;

    return ({
        session: session.id,
        user: user,
        params: params,
        history: props.history,
        surfspots: surfspots,
        modal: modal
    });
}

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchSurfspots: (searchParams, hostId) => dispatch(fetchSurfspots(searchParams, hostId)),

})

export default connect(msp, mdp)(HostCreate);