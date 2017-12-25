import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { totalCost, actions as CartAction, getTotalPerItem } from 'reducers/cart';
import styled from 'styled-components';

import './checkout.css';

const CheckoutTitle = styled.h4`
    font-family: "Agenda Light", elvetica,Arial,sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.4;
    color: black;
    letter-spacing: 0.25rem;
    padding: 10px;
`

class Checkout extends React.Component {
 
  removeProduct(product) {
      this.props.dispatch(CartAction.removeFromCart(product))
  }

  checkout() {
      alert('Checkout Coming Soon!')
  }

  decreaseQuantity(product) {
      if (product.quantity > 1) {
          this.props.dispatch(CartAction.decreaseQuantity(product))
      }
  }

  increaseQuantity(product) {
      this.props.dispatch(CartAction.increaseQuantity(product))
  }

  _renderItems() {
      const { getTotalPerItem } = this.props

      return (
        <table className="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
            {Object.values(getTotalPerItem).map((product, i) => {
                return (
                    <tr key={i}>
                        <td>
                            <img alt={product.title} src={product.images[0].src} width="100" height="100" />
                            <span className="p-2">{product.title}</span>
                        </td>
                    
                        <td>${product.singlePrice}</td>
                        <td>
                            <i onClick={this.decreaseQuantity.bind(this, product)} className="fa fa-minus-square-o fa-lg pointer mx-2" aria-hidden="true"></i>
                            <span>{product.quantity}</span>
                            <i onClick={this.increaseQuantity.bind(this, product)} className="fa fa-plus-square-o fa-lg pointer mx-2" aria-hidden="true"></i>
                        </td>
                        <td>${product.price}</td>
                        <td><i onClick={this.removeProduct.bind(this, product)} className="fa fa-trash-o fa-lg pointer" aria-hidden="true"></i></td>
                    </tr>
                )
            })}

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><strong>${this.props.totalCost.toFixed(2)}</strong></td>
                    <td><button onClick={this.checkout.bind(this)} className="btn btn-outline-primary pointer">Checkout</button></td>
                </tr>
            
            </tbody>
        </table>
      )
  }

  render() {
    return (
        <div className="mx-auto w-75 mt-5">
            <div className="d-flex justify-content-center">
                <CheckoutTitle>
                    SHOPPING CART
                </CheckoutTitle>
            </div>

            { (this.props.cart.length > 0) ? this._renderItems() : <div className="mt-4 text-center"><hr/><h5>There are no items currently in the cart!</h5></div> }

        </div>
    )
  }
};

Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
}

const mapState = state => ({
    cart: state.cart,
    totalCost: totalCost(state),
    getTotalPerItem: getTotalPerItem(state)
})

export default connect(mapState)(Checkout);