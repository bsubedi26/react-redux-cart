import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';

import { Provider } from 'react-redux';
import configureStore from 'util/configureStore';
import Routes from './routes';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Routes />
  </Provider>, document.getElementById('root'));
