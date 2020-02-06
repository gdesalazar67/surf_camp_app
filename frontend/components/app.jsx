import React from 'react';
// import { Provider } from 'react-redux';
import {
    Route,
    Switch,
    // Redirect,
    // Link,
    // HashRouter
} from 'react-router-dom';
import Favicon from 'react-favicon'
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import Giftbox from './splash_page/giftbox';
import SurfSpotIndex from './surfspots/surfspots_index_container';
import SurfSpotShow from './surfspot_showpage/surfspot_show_container';
import SplashPage from './splash_page/splash_page_cards';
import Footer from './footer';
import User from './user_page/user_container';
import Host from  './host_page/host_container'

const App = ()=>{

    return (
   <div>
       <Favicon url="/app/assets/images/favicon.ico"/>
        <Modal/>
        <Giftbox/>
        
        <NavBarContainer/>
        
        <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/index" component={SurfSpotIndex}/>
            <Route exact path="/surfspots/:id" component={SurfSpotShow} />
            <Route exact strict path="/user/:username" component={User} />
            <Route exact strict path="/user/host/:id" component={Host} />
        </Switch>
        <Footer/>
    </div>)
};

export default App;
