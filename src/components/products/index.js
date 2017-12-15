import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCartAction } from 'reducers/cart';
import { Logo, SubRoutes } from './common';



class ProductsPage extends Component {

  addCart(product) {
    let q = this.state.quantity
    this.props.addCartAction(product, q)
  }

  routeToDetail(product) {
    const { history } = this.props
    history.push(`/detail/${product.id}`)
  }

  quantityChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  handleSearchClick = (e) => {
    e.preventDefault();
    console.log('cl')
  }

  render() {

    return (
      <div>
        <Logo />
        <SubRoutes />

        <div className="top-image">
          {/* <img src="//cdn.shopify.com/s/files/1/0985/9080/t/12/assets/homepage_hero_image_1.jpg?3225173906714521792" alt="image" /> */}
        </div>

        <div className="d-flex justify-content-center">
          <h4 className="top-title">
            PRODUCT CATALOG
          </h4>

        </div> 

        <div className="row justify-content-center mx-auto w-75">

          {this.props.bremont && this.props.bremont.map((item, i) => {
            return (
              <div onClick={this.routeToDetail.bind(this, item)} className="m-3" key={i}>
                <img className="product-image pointer" src={item.images[0].src} alt="image" width="240" height="240" />
                <h5 className="product-title mt-4 pointer">{item.title}</h5>
                <span className="product-price mt-3 pointer">${item.variants[0].price}</span>
            </div>
            )
            
          })}
        </div>
        
         

      </div>

    );
  }
};

ProductsPage.propTypes = {
  addCartAction: PropTypes.func.isRequired

}

const mapState = (state) => ({
  bremont: state.bremont
})

export default connect(mapState, { addCartAction })(ProductsPage);
