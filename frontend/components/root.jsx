import React from 'react';
import { Provider } from 'react-redux';// makes the Redux store available to any nested components that have been wrapped in the connect() function.
import { HashRouter } from 'react-router-dom'; //client side routing is independent from server side routing: client side the route is handled by the JS already loaded on the page, no need for a full refresh. 
import App from "./app";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
);

export default Root;