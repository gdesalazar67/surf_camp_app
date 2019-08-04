import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import Searchbar from './searchbar/search_bar';
import SurfSpotIndex from './surfspots/surfspots_index_container';


const App = ()=>(
    <div>
        <Modal />
        
        <NavBarContainer/>
        
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <Route exact path="/" component={Searchbar}/> */}
            <Route exact path="/" component={SurfSpotIndex}/>
        </Switch>
    </div>
);

export default App;