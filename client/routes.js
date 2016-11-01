import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FirstPage from './components/FirstPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import LoginPageAuth from './components/LoginPageAuth';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import HOC from './components/HOC';
import requireAuth from './components/auth/requireAuth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={FirstPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path="login-auth" component={LoginPageAuth} />
        <Route path="checkout" component={requireAuth(Checkout)} />
        <Route path="detail/:id" component={ProductDetail} />
        <Route path="hoc" component={HOC} />
        
    </Route>
)