import { connect } from 'react-redux';
import React from 'react';
import {createSurfspot} from '../../actions/surfspots_actions';
import CreateSurfspot from './create_surfspot_form';


const msp = ({ users }) => {
    return {
        user: users ? Object.values(users) : null 
        // errors: errors.session,
    };
};

const mdp = dispatch => {

    return {
        createSurfspot: (surfspot) => dispatch(createSurfspot(surfspot))
        // removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(msp, mdp)(CreateSurfspot);