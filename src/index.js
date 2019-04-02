import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.scss';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './store/reducer';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store = {store}>
        <App></App>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
