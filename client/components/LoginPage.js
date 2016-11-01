var React = require('react');
var axios = require('axios');
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { login } from '../actions/usersAction';
import { removeMessages } from '../actions/flashMessages';

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
    this.props.login(this.state);
  }

  componentWillUnmount() {
    // remove flash messages when component is unmounted
    this.props.removeMessages()
  }

  render() {
    const { flashMessages } = this.props;
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)} className="col s12 center-align">
        
        <div className="card-panel">
        <h3 className="center-align">Sign In</h3>
          
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input id="username" type="text" className="validate" onChange={this.setChange.bind(this)} />
              <label htmlFor="username">User Name</label>
            </div>

            <span className="red-text">{flashMessages.length ? flashMessages[flashMessages.length - 1] : null}</span>
            

          </div>

         <div className="row">
           <div className="input-field col s12">
           <i className="material-icons prefix">lock</i>
           <input id="password" type="password" className="validate" onChange={this.setChange.bind(this)} />
            <label htmlFor="password">Password</label>
           </div>
           
         </div>
          <button className="btn btn-large waves-effect waves-light grey lighten-1 black-text btn-flat" type="submit" name="action">Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

LoginPage.propTypes = {
  cart: React.PropTypes.array.isRequired,
  login: React.PropTypes.func.isRequired,
  removeMessages: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log(state)
  return {
    cart: state.cartReducer,
    flashMessages: state.flashMessagesReducer
  }
}

export default connect(mapStateToProps, { login, removeMessages })(LoginPage);