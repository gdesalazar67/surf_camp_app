import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import {openModal,closeModal} from '../../actions/modal_actions'

const msp = ({ errors }) => {
    return {
        errors: errors,
        formType: "signup",
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                <strong>Login</strong>
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user)=> dispatch(login(user))

    };
};

export default connect(msp, mdp)(SessionForm);