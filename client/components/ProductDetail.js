import React from 'react';

class ProductDetail extends React.Component {
 
  componentDidMount() {
      console.log(this.props.params.id)
  }
  render() {
    return (
        <div>
            <h2>{this.props.params.id}</h2>
        </div>

    )
  }
};

export default ProductDetail;