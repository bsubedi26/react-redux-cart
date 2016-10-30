import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FirstPage from './components/FirstPage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import HOC from './components/HOC';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={FirstPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path="checkout" component={Checkout} />
        <Route path="detail/:id" component={ProductDetail} />
        <Route path="hoc" component={HOC} />
        
        
    </Route>
)