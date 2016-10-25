import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class NavBar extends React.Component {
 
  componentDidUpdate() {
      console.log('update wooo---')
      console.log(this.props.cart)
  }
  render() {
    return (
        <div className="navbar-fixed">
            <nav>
            <div className="nav-wrapper light-green lighten-2">
                <Link to="/" className="brand-logo">React-Cart</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/signup"> <i className="material-icons">shopping_cart</i> </Link> </li>
                    
                    <li className="chip">
                        Total Items: {this.props.cart.length}
                        <br />
                        Total Cost: {this.props.cart.reduce((total, item) => {
                            total += item.price;
                            var truncated = Math.floor(total * 100) / 100;
                            return truncated
                        }, 0)}
                    </li>
                     
                </ul>
            </div>
            </nav>
        </div>

    )
  }
};

NavBar.propTypes = {
  cart: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  console.log('NavBar --- state', state)
  return {
    cart: state.cartReducer
  }
}

export default connect(mapStateToProps, null)(NavBar);