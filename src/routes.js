import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/NavBar';

import Products from './components/products';
import ProductDetail from './components/products/detail';

import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import LoginPageAuth from './components/LoginPageAuth';
import Checkout from './components/Checkout';
// import requireAuth from './components/auth/requireAuth';

function Routes() {
    return (
        <Router>
            <div>
                <Navbar />

                <Route exact path="/" component={Products} />
                <Route exact path="/detail/:id" component={ProductDetail} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/login-auth" component={LoginPageAuth} />
                <Route exact path="/checkout" component={Checkout} />
            </div>

        </Router>
    )
}

export default Routes