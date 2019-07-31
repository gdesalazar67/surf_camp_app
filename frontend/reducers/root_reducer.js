import { combineReducers } from 'redux';
import session from './session_reducer';
import sessionErrors from './session_errors_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    sessionErrors,
});

export default rootReducer;