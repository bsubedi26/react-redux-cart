import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { totalItemsInCart, totalCost } from 'reducers/cart';

class NavBar extends React.Component {
  state = {
    guestLinks: [
      { name: 'Home', path: '/' },
      { name: 'Shopping Cart', path: '/checkout' },
    ]
  }

  componentDidMount() {

  }

  handleCartClick = (e) => {
    e.preventDefault()
    console.log(this.props)
    // this.props.history.push('/checkout')
  }

  render() {
    const { totalItemsInCart, totalCost } = this.props

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
          <span className="px-1" >{totalItemsInCart} items | ${totalCost}</span>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>

      </nav>
    );
  }
};

NavBar.propTypes = {
  cart: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    totalItemsInCart: totalItemsInCart(state),
    totalCost: totalCost(state)
  }
}

export default connect(mapStateToProps, {})(NavBar);