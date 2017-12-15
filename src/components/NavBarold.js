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

    // const userLinks = (
    //   <ul className="right hide-on-med-and-down">
    //       <li><Link to="/"> Home </Link> </li>
    //       <li><Link to="/"> {user.user.username} </Link> </li>
    //       <li><Link to="/checkout"> Shopping Cart </Link> </li>
    //       <li onClick={this.logout.bind(this)}><Link to=""> Logout </Link> </li>
    //       <li><Link to="/checkout"> <i className="material-icons">shopping_cart</i> </Link> </li>
    //       <li className="chip">
    //           Total Items: {this.props.cart.length}
    //           <br />
    //           Total Cost: {this.props.cart.reduce((total, item) => {
    //               total += parseInt(item.price);
    //               var truncated = Math.floor(total * 100) / 100;
    //               return truncated;
    //           }, 0)}
    //       </li>
    //   </ul>

    // );
    // Navigation links if the user is not logged in
    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item mx-2"><Link to="/"> Home </Link> </li>
          <li><Link to="/hoc">HOC</Link> </li>
          <li><Link to="/checkout"> Shopping Cart </Link> </li>
          <li><Link to="/login"> Login </Link> </li>
          <li><Link to="/signup"> Sign Up </Link> </li>
          <li><Link to="/checkout"> <i className="material-icons">shopping_cart</i> </Link> </li>
          <li className="chip">
              Total Items: {this.props.totalItemsInCart}
              <br />
              Total Cost: ${this.props.totalCost}
          </li>
      </ul>
      
    );

    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light-gray">
        <Link to="/" className="navbar-brand">React Cart</Link>
        {/* HAMBURGER MENU TOGGLER FOR MOBILE */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.state.guestLinks.map((link) =>
              (
                <li className="nav-item mx-3" key={link.name}>
                  <Link className="nav-link" to={link.path}>{link.name}</Link>
                </li>
              )
            )}
            {/* <li><Link to="/checkout"><i className="fa fa-lg fa-shopping-cart" aria-hidden="true"></i></Link> </li>
            <li className="badge">
              Total Items: {this.props.totalItemsInCart}
              <br />
              Total Cost: ${this.props.totalCost}
            </li> */}

          </ul>
    
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
    cart: state.cart,
    totalItemsInCart: totalItemsInCart(state),
    totalCost: totalCost(state)
  }
}

export default connect(mapStateToProps, {})(NavBar);