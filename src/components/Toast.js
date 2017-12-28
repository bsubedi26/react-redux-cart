import React from 'react';

import './toast.css'

class Toast extends React.Component {
  render() {
    return (
      <div id="toast">{this.props.message}</div>
    )
  }
}

export default Toast
