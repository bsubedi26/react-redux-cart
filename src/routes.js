import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './containers/navbar';
import Products from './containers/products';
import ProductDetail from './containers/products/detail';
import Checkout from './containers/products/checkout';
import LoginPage from './containers/login';
import SignupPage from './containers/signup';

class Routes extends React.Component {
    render() {

        return (
            <Router>
                <div>

                    <Navbar />
                    <Route exact path="/" component={Products} />
                    <Route exact path="/detail/:id" component={ProductDetail} />
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path="/signup" component={SignupPage} />
                    <Route exact path="/checkout" component={Checkout} />

                </div>
            </Router>
        )
    }
        
}

export default Routes
