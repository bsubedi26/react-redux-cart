import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCartAction } from '../reducers/cart';

const item = {
  "id": 2204678213,
  "title": "Cobham Coat Wallet",
  "handle": "cobham-coat-wallet",
  "body_html": "<p>Bremont’s Cobham Coat Wallet includes eight credit card compartments, two full length pockets for ample note storage and two large sections to stow additional documents. The wallet features blind Bremont logo and propeller embossing and is crafted from deluxe calf and English bridle leather, guaranteeing excellent quality.</p>\n<p>Made in England, the Cobham Coat Wallet approximately measures a width of 10.7cm by 18.3cm height, sizes may vary marginally.</p>\n<p>See how this product is made in our film below.</p>\n<iframe width=\"500\" height=\"300\" src=\"https://www.youtube.com/embed/3qIV8zRGJ0s?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen=\"\"></iframe>",
  "published_at": "2017-11-29T14:21:51+00:00",
  "created_at": "2015-09-23T11:59:18+01:00",
  "updated_at": "2017-12-12T14:27:55+00:00",
  "vendor": "Bremont",
  "product_type": "Leather Accessories",
  "tags": [
    "for-the-adventurer",
    "for-the-gentleman",
    "for-the-lady",
    "for-the-mariner",
    "leather-accessories",
    "over-150"
  ],
  "variants": [
    {
      "id": 6332349189,
      "title": "Black",
      "option1": "Black",
      "option2": null,
      "option3": null,
      "sku": "BR.600.5037",
      "requires_shipping": true,
      "taxable": true,
      "featured_image": null,
      "available": true,
      "price": "165.00",
      "grams": 200,
      "compare_at_price": null,
      "position": 1,
      "product_id": 2204678213,
      "created_at": "2015-09-23T11:59:18+01:00",
      "updated_at": "2017-12-12T14:27:55+00:00"
    }
  ],
  "images": [
    {
      "id": 4215467909,
      "created_at": "2015-09-23T12:00:08+01:00",
      "position": 1,
      "updated_at": "2015-09-23T12:00:08+01:00",
      "product_id": 2204678213,
      "variant_ids": [],
      "src": "https://cdn.shopify.com/s/files/1/0985/9080/products/5832_Bremont23804.jpg?v=1443006008",
      "width": 1024,
      "height": 1024
    },
    {
      "id": 4215467973,
      "created_at": "2015-09-23T12:00:09+01:00",
      "position": 2,
      "updated_at": "2015-09-23T12:00:09+01:00",
      "product_id": 2204678213,
      "variant_ids": [],
      "src": "https://cdn.shopify.com/s/files/1/0985/9080/products/5832_Bremont23805.jpg?v=1443006009",
      "width": 1024,
      "height": 1024
    },
    {
      "id": 4215468933,
      "created_at": "2015-09-23T12:00:21+01:00",
      "position": 3,
      "updated_at": "2015-09-23T12:00:21+01:00",
      "product_id": 2204678213,
      "variant_ids": [],
      "src": "https://cdn.shopify.com/s/files/1/0985/9080/products/5832_Bremont23806.jpg?v=1443006021",
      "width": 1024,
      "height": 683
    }
  ],
  "options": [
    {
      "name": "Color",
      "position": 1,
      "values": [
        "Black"
      ]
    }
  ]
}

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
      <div>
        <div className="p-3 d-flex justify-content-center">
          <img src="//cdn.shopify.com/s/files/1/0985/9080/t/12/assets/logo.svg?3225173906714521792" alt="Bremont" />
        </div>

        <div className="d-flex justify-content-center">
          <ul className="d-inline-block ul-style-none ul-sub-routes">
            <li className="mx-1">CHRISTMAS GIFTS</li>
            <li className="mx-1">WATCH STRAPS & ACCESSORIES</li>
            <li className="mx-1">SMALL ACCESSORIES</li>
            <li className="mx-1">MILITARY</li>
            <li className="mx-1">BOUTIQUES</li>
          </ul>
        </div>

        <img src="//cdn.shopify.com/s/files/1/0985/9080/t/12/assets/homepage_hero_image_1.jpg?3225173906714521792" alt="image" />

        <div className="d-flex justify-content-center">
          <h4 className="top-title">
            A BREMONT CHRISTMAS
          </h4>

        </div> 

        <div className="product-contain mx-auto w-75">
          <img src={item.images[0].src} alt="image" width="240" height="240"/>
          <h5>{item.title}</h5>
          <span>{item.variants[0].price}</span>
        </div>
        
         

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




// {
//   this.props.products.map((product, i) => {
//     // console.log('PRODUCT ', product)
//     const imgUrl = product.src
//     console.log('imgUrl ', imgUrl)
//     return (
//       <div key={i} className="col s6 card-panel">
//         <img src={require(`../${product.src}`)} alt={product.name} height="250" width="250" />
//         {/* <h5><span className="chip">{product.id}</span>{product.name}</h5> */}
//         <span className="chip">{product.price}</span>
//         <p className="light">
//           {product.info}
//         </p>

//         <div className="row padding-left-20">
//           <div className="col s12">
//             <input id="quantity" type="number" onChange={this.quantityChange.bind(this)} />
//             <label htmlFor="quantity">Quantity</label>

//           </div>

//         </div>

//         <div className="row padding-left-20">
//           <button onClick={this.addCart.bind(this, product)} className="btn btn-product waves-effect waves-light light-blue darken-2">Add to Cart</button>
//           <Link to={'/detail/' + product.id}> <button className="btn btn-product waves-effect waves-light brown lighten-2">Details</button> </Link>
//         </div>
//       </div>
//     )
//   })
// }