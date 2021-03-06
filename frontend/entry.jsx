import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded',()=>{
    let preloadedState = undefined;
    let store;
    if (window.currentUser) {
        preloadedState = {
            session: {
                id: window.currentUser.id
            },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }
    window.store = store
    let root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})