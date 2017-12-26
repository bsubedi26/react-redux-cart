import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { totalItemsInCart, totalCheckoutCost } from 'reducers/cart/selector';

class NavBar extends React.Component {
  state = {
    guestLinks: [
      { name: 'Home', path: '/' },
      { name: 'Shopping Cart', path: '/checkout' },
    ]
  }

  render() {
    const { totalItemsInCart, totalCheckoutCost } = this.props

    return (
      <nav className="d-flex nav-contain">
        <div className="p-1 flex-1">
          <ul className="nav-left-side">
            <Link to="/"><li className="mx-2">HOME</li></Link>
          </ul>
        </div>
        <div className="p-1 flex-2">
          <ul className="nav-middle-side">
            <a rel="noopener noreferrer" target="_blank" href="//bremont.com/collection"><li className="mx-2">COLLECTION</li></a>
            <a rel="noopener noreferrer" target="_blank" href="//bremont.com/explore-bremont"><li className="mx-2">EXPLORE BREMONT</li></a>
            <a rel="noopener noreferrer" target="_blank" href="//bremont.com/nearest-stores/store-locator"><li className="mx-2">NEAREST STORES</li></a>
            <a rel="noopener noreferrer" target="_blank" href="//bremont.com/blogbook"><li className="mx-2">BLOGBOOK</li></a>
            <a rel="noopener noreferrer" target="_blank" href="//bremont.com/customer-service"><li className="mx-2">CUSTOMER SERVICE</li></a>
          </ul>
        </div>
        
        <Link to="/checkout" className="p-1 nav-right-side flex-half">
          <span className="px-1" >{totalItemsInCart} items | ${totalCheckoutCost}</span>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>

      </nav>
    );
  }
};

NavBar.propTypes = {
  totalItemsInCart: PropTypes.number.isRequired,
  totalCheckoutCost: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  totalItemsInCart: totalItemsInCart(state),
  totalCheckoutCost: totalCheckoutCost(state)
})

export default connect(mapStateToProps)(NavBar);