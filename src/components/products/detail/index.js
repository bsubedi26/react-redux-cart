import React from 'react';
import { connect } from 'react-redux';
import { addCartAction } from 'reducers/cart';
import { Logo, SubRoutes } from '../common';
import styled from 'styled-components';

const ProductTitle = styled.h1`
    display: block;
    font-weight: 400;
    margin: 0 0 0.5em;
    line-height: 1.4;
    color: #000;
    font-size: 1.3rem;
`
const ProductPrice = styled.span`
    display: block;
    font-size: 12px;
    font-size: 0.75rem;
    font-weight: 400;
    color: #666;

`

class ImageViewer extends React.Component {
    state = {
        currentIdx: 0,
        images: this.props.images || []
    }
    changeImage(idx) {
        this.setState({
            currentIdx: idx
        })
    }

    render() {
        const { currentIdx, images } = this.state
        return (
            <div>
                <div className="current-image">
                    <img className="product-image pointer" src={images[currentIdx].src} alt="image" width="300" height="300" />
                </div>

                <div className="other-images">
                    {images.map((image, i) => {
                        if (currentIdx !== i) {
                            return (
                                <img onClick={this.changeImage.bind(this, i)} key={image.id} className="border-1 p-2 product-image pointer" src={image.src} alt="image" width="70" height="70" />
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}


class ProductDetail extends React.Component {

    state = {
        quantity: 1
    }

    addCart() {
        this.props.addCartAction(this.state.product, 1)
    }

    check = () => {
        console.log(this.props.product)
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

                        <button className="mt-2 btn btn-sm btn-add-cart" onClick={this.check}>ADD TO CART</button>
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

export default connect(mapState, { addCartAction })(ProductDetail);