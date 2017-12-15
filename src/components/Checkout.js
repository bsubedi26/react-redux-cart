import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { totalCost, removeFromCart, getTotalPerItem } from '../reducers/cart';

class Checkout extends React.Component {
 
  removeProduct(product) {
      this.props.removeFromCart(product)
  }

  componentDidMount() {
    console.log(this.props.getTotalPerItem)
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
                        <th>Quantity Amount</th>
                        <th>Product Name</th>
                        <th>Total Price</th>
                        <th>Product Image</th>
                    </tr>
                </thead>

                <tbody>
                {this.props.getTotalPerItem.map((product, i) => {
                    return (
                        <tr key={i}>
                            <td>{product.quantity}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><img alt={product.name} src={product.src} width="100" height="100" /></td>
                            <td><button onClick={this.removeProduct.bind(this, product)} className="btn-floating waves-effect waves-light red">----</button></td>
                        </tr>
                    )
                })}

                    <tr>
                        <td></td>
                        <td>
                        </td>
                        <td><strong>
                            ${this.props.totalCost}
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
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    totalCost: totalCost(state),
    getTotalPerItem: getTotalPerItem(state)
  }
}

export default connect(mapStateToProps, { removeFromCart })(Checkout);