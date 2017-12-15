import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { totalItemsInCart, totalCost } from '../reducers/cart';

class NavBar extends React.Component {
  state = {
    guestLinks: [
      { name: 'Home', path: '/' },
      { name: 'Shopping Cart', path: '/checkout' },
    ]
  }

  logout(e) {
    e.preventDefault();
    // this.props.logout();
  }

  render() {

    return (
      <nav className="d-flex nav-contain">
        <div className="p-1 flex-1">
          <ul className="nav-left-side">
            <li className="mx-2">Login</li>
            <li className="mx-2">Create Account</li>
          </ul>
        </div>
        <div className="p-1 flex-2">
          <ul className="nav-middle-side">
            <li className="mx-2">COLLECTION</li>
            <li className="mx-2">EXPLORE BREMONT</li>
            <li className="mx-2">NEAREST STORES</li>
            <li className="mx-2">BLOGBOOK</li>
            <li className="mx-2">CUSTOMER SERVICE</li>
          </ul>
        </div>
        <div className="p-1 nav-right-side">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>

      </nav>
    );
  }
};

NavBar.propTypes = {
  cart: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    totalItemsInCart: totalItemsInCart(state),
    totalCost: totalCost(state)
  }
}

export default connect(mapStateToProps, {})(NavBar);