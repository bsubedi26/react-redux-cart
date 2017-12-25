import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Logo, SubRoutes } from './common';
import { actions as CartAction } from 'reducers/cart';


class ProductsPage extends Component {

  routeToDetail(product) {
    const { history } = this.props
    history.push(`/detail/${product.id}`)
  }

  handleSearchClick = (e) => {
    e.preventDefault();
  }
  
  addToCart(product) {
      this.props.dispatch(CartAction.addToCart(product, 1))
  }

  render() {

    return (
      <div>
        <Logo />
        <SubRoutes />

        <div className="top-image"></div>

        <div className="d-flex justify-content-center">
          <h4 className="top-title">
            PRODUCT CATALOG
          </h4>

        </div> 

        <div className="row justify-content-center mx-auto w-75">

          {this.props.bremont && this.props.bremont.map((item, i) => {
            return (
              <div className="m-3" key={i}>
                <img onClick={this.routeToDetail.bind(this, item)} className="product-image pointer" src={item.images[0].src} alt={item.title} width="240" height="240" />
                <h5 onClick={this.routeToDetail.bind(this, item)} className="product-title mt-4 pointer">{item.title}</h5>
                <span onClick={this.routeToDetail.bind(this, item)} className="product-price mt-3 pointer">${item.variants[0].price}</span>
                {/* <button onClick={this.addToCart.bind(this, item)} className="btn btn-outline-primary pointer">Add</button> */}
            </div>
            )
            
          })}
        </div>
        
         

      </div>

    );
  }
};

const mapState = (state) => ({
  bremont: state.bremont
})

export default connect(mapState)(ProductsPage);
