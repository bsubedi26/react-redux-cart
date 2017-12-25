import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { totalCheckoutCost, getTotalPerItem, totalItemsInCart } from 'reducers/cart/selector';
import { actions as CartAction } from 'reducers/cart/action';
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

  clearCart() {
      console.log(this.props.getTotalPerItem)
    // this.props.dispatch(CartAction.reset())
  }

  decreaseQuantity(product) {
      if (product.quantity > 1) {
          this.props.dispatch(CartAction.decreaseQuantity(product))
      }
  }

  increaseQuantity(product) {
      this.props.dispatch(CartAction.increaseQuantity(product))
  }

  _renderProductsTable() {
      const { getTotalPerItem, totalCheckoutCost } = this.props

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
            {getTotalPerItem.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>
                            <img alt={item.product.title} src={item.product.images[0].src} width="100" height="100" />
                            <span className="p-2">{item.product.title}</span>
                        </td>
                    
                        <td>${item.singlePrice}</td>
                        <td>
                            <i onClick={this.decreaseQuantity.bind(this, item)} className="fa fa-minus-square-o fa-lg pointer mx-2" aria-hidden="true"></i>
                            <span>{item.quantity}</span>
                            <i onClick={this.increaseQuantity.bind(this, item)} className="fa fa-plus-square-o fa-lg pointer mx-2" aria-hidden="true"></i>
                        </td>
                        <td>${item.totalPrice}</td>
                        <td><i onClick={this.removeProduct.bind(this, item)} className="fa fa-trash-o fa-lg pointer" aria-hidden="true"></i></td>
                    </tr>
                )
            })}

                <tr>
                    <td></td>
                    <td></td>
                    <td><button onClick={this.clearCart.bind(this)} className="btn btn-outline-info pointer">Clear Cart</button></td>
                    <td><strong>${totalCheckoutCost}</strong></td>
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

            { (this.props.totalItemsInCart > 0) ? this._renderProductsTable() : <div className="mt-4 text-center"><hr/><h5>There are no items currently in the cart!</h5></div> }

        </div>
    )
  }
};

Checkout.propTypes = {
  totalItemsInCart: PropTypes.number.isRequired,
  getTotalPerItem: PropTypes.array.isRequired,
  totalCheckoutCost: PropTypes.number.isRequired
}

const mapState = state => ({
    totalItemsInCart: totalItemsInCart(state),
    getTotalPerItem: getTotalPerItem(state),
    totalCheckoutCost: totalCheckoutCost(state)
})

export default connect(mapState)(Checkout);