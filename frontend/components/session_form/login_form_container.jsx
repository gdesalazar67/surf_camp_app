import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { login, removeErrors} from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mdp= dispatch => {
    
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                <strong>Sign up!</strong>
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user) => dispatch(login(user)),
        removeErrors: ()=> dispatch(removeErrors())
    };
};

export default connect(msp, mdp)(SessionForm);