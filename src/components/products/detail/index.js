import React from 'react';
import { connect } from 'react-redux';
import { actions as CartAction } from 'reducers/cart';
import { Logo, SubRoutes, ProductTitle, ProductPrice, ImageViewer } from '../common';

class ProductDetail extends React.Component {

    state = {
        quantity: 1
    }

    addToCart = (product) => {
        this.props.dispatch(CartAction.addToCart(product, this.state.quantity))
    }

    decreaseQuantity = () => {
        if (this.state.quantity === 1) return
        this.setState({
            quantity: this.state.quantity - 1
        })
    }

    increaseQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    render() {
        const { product } = this.props
        return (
            <div>
                <Logo />
                <SubRoutes />

                <div className="mx-auto w-75 row">
                    <div className="col">
                        <ImageViewer images={product.images} />
                    </div>

                    <div className="p-3 col">
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductPrice className="pt-1">${product.variants[0].price}</ProductPrice>
                        <ProductPrice className="pt-2">{product.variants[0].sku}</ProductPrice>
                        <i onClick={this.decreaseQuantity} className="fa fa-minus pointer" aria-hidden="true"></i>
                        <input onChange={() => {} } value={this.state.quantity} style={{ height: '30px', width: '20%' }} className="m-2 d-inline-block form-control text-center" />
                        <i onClick={this.increaseQuantity} className="fa fa-plus pointer" aria-hidden="true"></i>
                        <br />

                        <button className="mt-2 btn btn-sm pointer btn-add-cart" onClick={this.addToCart.bind(this, product)}>ADD TO CART</button>
                        <hr />
                        
                        <div className="detail-description" dangerouslySetInnerHTML={{ __html: product.body_html }}>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

const findProduct = (state, id) => {
    return state.bremont.find(item => item.id === parseInt(id, 10))
}

const mapState = (state, props) => ({
    product: findProduct(state, props.match.params.id)
})

export default connect(mapState)(ProductDetail);