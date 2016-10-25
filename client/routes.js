import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FirstPage from './components/FirstPage';
import SignupPage from './components/signup/SignupPage';
import ProductDetail from './components/ProductDetail';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={FirstPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="detail/:id" component={ProductDetail} />
        
    </Route>
)