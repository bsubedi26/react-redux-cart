import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/usersAction';

class NavBar extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  componentDidUpdate() {
      // console.log(this.props.user.user)
  }
  
  logout(e) {
    e.preventDefault();
    console.log('click')
    this.props.logout()
  }

  render() {
    const { user } = this.props;

    const userLinks = (
      <ul className="right hide-on-med-and-down">
          <li><Link to="/"> Home </Link> </li>
          <li><Link to="/"> {user.user.username} </Link> </li>
          <li><Link to="/checkout"> Shopping Cart </Link> </li>
          <li onClick={this.logout.bind(this)}><Link to=""> Logout </Link> </li>
          <li><Link to="/checkout"> <i className="material-icons">shopping_cart</i> </Link> </li>
          <li className="chip">
              Total Items: {this.props.cart.length}
              <br />
              Total Cost: {this.props.cart.reduce((total, item) => {
                  total += item.price;
                  var truncated = Math.floor(total * 100) / 100;
                  return truncated;
              }, 0)}
          </li>
      </ul>

    );
    // Navigation links if the user is not logged in
    const guestLinks = (
      <ul className="right hide-on-med-and-down">
          <li><Link to="/"> Home </Link> </li>
          <li><Link to="/hoc">HOC</Link> </li>
          <li><Link to="/checkout"> Shopping Cart </Link> </li>
          <li><Link to="/login"> Login </Link> </li>
          <li><Link to="/signup"> Sign Up </Link> </li>
          <li><Link to="/checkout"> <i className="material-icons">shopping_cart</i> </Link> </li>
          <li className="chip">
              Total Items: {this.props.cart.length}
              <br />
              Total Cost: {this.props.cart.reduce((total, item) => {
                  total += item.price;
                  var truncated = Math.floor(total * 100) / 100;
                  return truncated;
              }, 0)}
          </li>
      </ul>
      
    );

    return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper light-green darken-1">
                <Link to="/" className="brand-logo">React-Cart</Link>

                { user.user.username ? userLinks : guestLinks }

                

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
  return {
    cart: state.cartReducer,
    user: state.usersReducer
  }
}

export default connect(mapStateToProps, { logout })(NavBar);