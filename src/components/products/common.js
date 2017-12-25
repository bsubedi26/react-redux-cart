import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
    return (
        <div className="p-3 d-flex justify-content-center">
            <img src="//cdn.shopify.com/s/files/1/0985/9080/t/12/assets/logo.svg?3225173906714521792" alt="Bremont" />
        </div>
    )
}

export const SubRoutes = () => {
    return (
        <div className="d-flex justify-content-center">
            <ul className="d-inline-block ul-style-none ul-sub-routes">
                <li className="mx-1">CHRISTMAS GIFTS</li>
                <li className="mx-1">WATCH STRAPS & ACCESSORIES</li>
                <li className="mx-1">SMALL ACCESSORIES</li>
                <li className="mx-1">MILITARY</li>
                <li className="mx-1">BOUTIQUES</li>
            </ul>
        </div>
    )
}


export const ProductTitle = styled.h1`
    display: block;
    font-weight: 400;
    margin: 0 0 0.5em;
    line-height: 1.4;
    color: #000;
    font-size: 1.3rem;
`
export const ProductPrice = styled.span`
    display: block;
    font-size: 12px;
    font-size: 0.75rem;
    font-weight: 400;
    color: #666;

`

export class ImageViewer extends React.Component {
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
                    <img className="product-image pointer" src={images[currentIdx].src} alt={images[currentIdx].title} width="300" height="300" />
                </div>

                <div className="other-images">
                    {images.map((image, i) => {
                        if (currentIdx !== i) {
                            return (
                                <img onClick={this.changeImage.bind(this, i)} key={image.id} className="border-1 p-2 product-image pointer" src={image.src} alt={image.title} width="70" height="70" />
                            )
                        }
                        else {
                            return null;
                        }

                    })}
                </div>
            </div>
        )
    }
}
