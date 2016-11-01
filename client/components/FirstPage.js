import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addCartAction } from '../actions/cartAction';
import axios from 'axios';

class FirstPage extends React.Component {
  
  constructor() {
    super()
  }

  addCart(product) {
    // console.log(product)
    this.props.addCartAction(product)
    
  }

  details(product) {
    // console.log(product)
  }

  render() {

    return (
      <div className="row">
        {this.props.products.map((product, i) => {

          return (
            <div key={i} className="col s6 card-panel">
                <img src={product.src} height="250" width="250" />
                <h5><span className="chip">{product.id}</span>{product.name}</h5>
                <p className="light">
                  {product.info}
                </p>
                
                <div className="row">
                  <button onClick={this.addCart.bind(this, product)} className="btn btn-product waves-effect waves-light light-green darken-2">Add to Cart</button>
                  <Link to={'/detail/'+product.id}> <button className="btn btn-product waves-effect waves-light brown lighten-2">Details</button> </Link>
                </div>
            </div>
          )
        })}

      </div>

    );
  }
};

FirstPage.propTypes = {
  products: React.PropTypes.array.isRequired,
  addCartAction: React.PropTypes.func.isRequired
  
}

function mapStateToProps(state) {
  return {
    products: state.storeReducer
  }
}

export default connect(mapStateToProps, { addCartAction })(FirstPage);