import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  setChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.login(this.state);
  }

  componentWillUnmount() {
    // remove flash messages when component is unmounted
    // this.props.removeMessages()
  }

  render() {
    const { flashMessages } = this.props;
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)} className="col s12 center-align">
        
        <div className="card-panel">
        <h4 className="center-align card-panel blue-grey-text" style={{fontFamily: 'Comic Sans MS'}}>Sign In Below:</h4>
          
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input id="username" type="text" className="validate" onChange={this.setChange.bind(this)} />
              <label htmlFor="username">User Name</label>
            </div>

          </div>

         <div className="row">
           <div className="input-field col s12">
           <i className="material-icons prefix">lock</i>
           <input id="password" type="password" className="validate" onChange={this.setChange.bind(this)} />
            <label htmlFor="password">Password</label>
           </div>
           
         </div>
          <button className="btn btn-medium waves-effect waves-light grey lighten-1 black-text btn-flat" type="submit" name="action">Submit</button>
          <br />
          <span className="">Don't have an account? Register <Link to="/signup">here</Link></span>
          </div>
        </form>
      </div>
    );
  }
};

LoginPage.propTypes = {
  cart: PropTypes.array.isRequired,
  // login: PropTypes.func.isRequired,
  // removeMessages: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps, {})(LoginPage);