import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { addCartAction } from '../reducers/cart';

class ProductDetail extends React.Component {
 
  componentWillMount() {
      console.log(this.props)

      this.props.products.forEach(product => {
          if (product.id == this.props.params.id) {
              this.setState({
                  product: product
              })
            }
      })

  }

  addCart() {
    this.props.addCartAction(this.state.product, 1)
  }

  render() {
    return (
        <div>
            
            <div className="col s4 card-panel">
                <div className="row">
                    <img className="col s4" src={this.state.product.src} height="250" width="250" />
                    <h5 className="center"><span className="chip">{this.state.product.id}</span>{this.state.product.name}</h5>
                    <p className="light">
                        {this.state.product.info}
                    </p>
                    
                    <div className="row">
                        <button onClick={this.addCart.bind(this)} className="btn waves-effect waves-light light-green darken-2">Add to Cart</button>
                        <hr />
                        <button onClick={browserHistory.goBack} className="btn waves-effect waves-light brown lighten-2">Go Back</button>
                    </div>
                </div>

            </div>

        </div>

    )
  }
};

ProductDetail.propTypes = {
//   products: React.PropTypes.array.isRequired,
//   addCartAction: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: state.productReducer
  }
}

export default connect(mapStateToProps, { addCartAction })(ProductDetail);