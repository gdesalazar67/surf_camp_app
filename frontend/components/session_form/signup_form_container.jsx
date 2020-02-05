import { connect } from 'react-redux';
import React from 'react';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import {openModal,closeModal} from '../../actions/modal_actions'

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: "signup",
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                <strong>Log in!</strong>
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user)=> dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(msp, mdp)(SessionForm);