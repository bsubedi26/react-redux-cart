var React = require('react');
var axios = require('axios');
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { login } from '../../actions/usersAction';

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

  render() {
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

          </div>

         <div className="row">
           <div className="input-field col s12">
           <i className="material-icons prefix">lock</i>
           <input id="password" type="password" className="validate" onChange={this.setChange.bind(this)} />
            <label htmlFor="password">Password</label>
           </div>
           
         </div>

          <button className="btn waves-effect waves-light light-green darken-3" type="submit" name="action">Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

LoginPage.propTypes = {
  cart: React.PropTypes.array.isRequired,
  login: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}

export default connect(mapStateToProps, { login })(LoginPage);