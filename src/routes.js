import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/NavBar';

import FirstPage from './components/FirstPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import LoginPageAuth from './components/LoginPageAuth';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
// import requireAuth from './components/auth/requireAuth';

function Routes() {
    return (
        <Router>
            <div>
                <Navbar />

                <Route exact path="/" component={FirstPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/login-auth" component={LoginPageAuth} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/detail/:id" component={ProductDetail} />
            </div>

        </Router>
    )
}

export default Routes