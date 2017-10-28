import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addCartAction } from '../reducers/cart';
import axios from 'axios';

class FirstPage extends Component {
  
  constructor() {
    super()
    this.state = {
      quantity: 1
    }
  }

  addCart(product) {
    let q = this.state.quantity
    this.props.addCartAction(product, q)
  }

  details(product) {
    // console.log(product)
  }

  quantityChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  render() {

    return (
      <div className="row">
        {this.props.products.map((product, i) => {

          return (
            <div key={i} className="col s6 card-panel">
                <img src={product.src} height="250" width="250" />
                <h5><span className="chip">{product.id}</span>{product.name}</h5>
                <span className="chip">{product.price}</span>
                <p className="light">
                  {product.info}
                </p>

                <div className="row padding-left-20">
                  <div className="col s12">
                    <input id="quantity" type="number" onChange={this.quantityChange.bind(this)} />
                    <label htmlFor="quantity">Quantity</label>

                  </div>
                  
                </div>
                
                <div className="row padding-left-20">
                  <button onClick={this.addCart.bind(this, product)} className="btn btn-product waves-effect waves-light light-blue darken-2">Add to Cart</button>
                  <Link to={'/detail/'+ product.id}> <button className="btn btn-product waves-effect waves-light brown lighten-2">Details</button> </Link>
                </div>
            </div>
          )
        })}

      </div>

    );
  }
};

FirstPage.propTypes = {
  products: PropTypes.array.isRequired,
  addCartAction: PropTypes.func.isRequired
  
}

function mapStateToProps(state) {
  return {
    products: state.productReducer
  }
}

export default connect(mapStateToProps, { addCartAction })(FirstPage);