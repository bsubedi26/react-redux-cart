import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartAction';

class Checkout extends React.Component {
 
  componentDidMount() {
      console.log(this.props.cart)
  }

  removeProduct(product) {
      console.log(product)
      this.props.removeFromCart(product)
  }

  checkout() {
      alert('Checkout Coming Soon!')
  }

  render() {
    return (
        <div>
            
            <table className="highlight centered">
                <thead>
                    <tr>
                        <th>Item #</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Image</th>
                    </tr>
                </thead>

                <tbody>
                {this.props.cart.map((product, i) => {
                    return (
                        <tr key={i}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><img src={product.src} width="100" height="100" /></td>
                            <td><button onClick={this.removeProduct.bind(this, product)} className="btn-floating waves-effect waves-light red">----</button></td>
                        </tr>
                    )
                })}

                    <tr>
                        <td></td>
                        <td></td>
                        <td><strong>
                            ${this.props.cart.reduce((total, item) => {
                                total += item.price;
                                var truncated = Math.floor(total * 100) / 100;
                                return truncated;
                            }, 0)}
                        </strong></td>
                        <td><button onClick={this.checkout.bind(this)} className="btn waves-effect waves-light brown lighten-2">Checkout</button></td>
                    </tr>
                
                </tbody>
            </table>

        </div>
    )
  }
};

Checkout.propTypes = {
  cart: React.PropTypes.array.isRequired,
  removeFromCart: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}

export default connect(mapStateToProps, { removeFromCart })(Checkout);