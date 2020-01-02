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
import SearchIndexMap from './map/map_container';

const App = ()=>(
    <div>
        <Modal />
        <div className="promotion">
            <img className="giftbox" src={window.giftboxlogoURL}/>
            Send the gift of camping.
        </div>
        {/* <NavBarContainer/> */}
        
        {/* <Switch>
            <Route exact path="/" component={SurfSpotIndex}/>
            <Route exact path="/surfspots/:id" component={SurfSpotShow}/>
            <Route exact path="/surfspots" component={SearchIndexMap}/>
        </Switch> */}
    </div>
);

export default App;