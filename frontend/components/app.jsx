import React from 'react';
// import { Provider } from 'react-redux';
import {
    Route,
    Switch,
    // Redirect,
    // Link,
    // HashRouter
} from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import SurfSpotIndex from './surfspots/surfspots_index_container';
import SurfSpotShow from './surfspot_showpage/surfspot_show_container';
import SurfSpotIndexSearchMap from './map/index_map';

const App = ()=>(
    <div>
        <Modal />
        
        <NavBarContainer/>
        
        <Switch>
            <Route exact path="/" component={SurfSpotIndex}/>
            <Route exact path="/surfspots/:id" component={SurfSpotShow}/>
            <Route exact path="/surfspots" component={SurfSpotIndexSearchMap}/>
        </Switch>
    </div>
);

export default App;