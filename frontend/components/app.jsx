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
import Giftbox from './splash_page/giftbox';
import SurfSpotIndex from './surfspots/surfspots_index_container';
import SurfSpotShow from './surfspot_showpage/surfspot_show_container';
import SearchIndexMap from './map/map_container';
import SplashPage from './splash_page/splash_page_cards';
import Footer from './footer'

const App = ()=>(
    <div>
        <Modal/>
        <Giftbox/>
        
        <NavBarContainer/>
        
        <Switch>
            <Route exact path="/" component={SplashPage}/>
            <Route exact path="/index" component={SurfSpotIndex}/>
            <Route exact path="/surfspots/:id" component={SurfSpotShow}/>
            {/* <Route exact path="/surfspots" component={SearchIndexMap}/> */}
        </Switch>
        <Footer/>
    </div>
);

export default App;