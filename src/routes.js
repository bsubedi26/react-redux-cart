import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

<<<<<<< HEAD
import Navbar from './components/navbar';
import Products from './components/products';
import ProductDetail from './components/products/detail';
import Checkout from './components/products/checkout';
import LoginPage from './components/login';
import SignupPage from './components/signup';
// import requireAuth from './components/auth/requireAuth';
=======
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
>>>>>>> d19d93693cafdd83305cc099f082a94d5dd2db9c

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

<<<<<<< HEAD
export default Routes;
=======
export default Routes
>>>>>>> d19d93693cafdd83305cc099f082a94d5dd2db9c
