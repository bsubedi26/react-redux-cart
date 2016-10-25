import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addToCart } from '../actions/productsAction';
import { addCartAction } from '../actions/cartAction';

class FirstPage extends React.Component {
  
  constructor() {
    super()
  }
  componentDidMount() {

  }

  addCart(product) {
    // console.log(product)
    this.props.addCartAction(product)
    
  }

  details() {
    console.log(this.props.products)
  }

  render() {

    return (
      <div className="row">
        
        {this.props.products.map((product, i) => {

          return (
            
            <div key={i} className="col s4 card-panel">
                <img src={product.src} height="250" width="250" />
                <h5 className="center"><span className="chip">{product.id}</span>{product.name}</h5>
                <p className="light">
                  {product.info}
                </p>

                
                <div className="row">
                  <button onClick={this.addCart.bind(this, product)} className="btn waves-effect waves-light light-green darken-2">Add to Cart</button>
                  <button onClick={this.details.bind(this)} className="btn waves-effect waves-light brown lighten-2">Details</button>
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
  addToCart: React.PropTypes.func.isRequired,
  addCartAction: React.PropTypes.func.isRequired
  
}

function mapStateToProps(state) {
  console.log('first page state', state)
  return {
    products: state.storeReducer
  }
}

export default connect(mapStateToProps, { addToCart, addCartAction })(FirstPage);