var React = require('react');
var axios = require('axios');
import { browserHistory } from 'react-router';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    }
  }
 

  setChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You have signed up successfully. Welcome!'
          })
          // Redirect user to / path
          browserHistory.push('/');
      });
  }

  render() {
    
    return (

      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)} className="col s12 center-align">
        
        <div className="card-panel">
        <h3 className="center-align">Create an Account</h3>
          
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="username" type="text" className="validate" onChange={this.setChange.bind(this)} />
              <label htmlFor="username">User Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">email</i>
              <input id="email" type="email" className="validate" onChange={this.setChange.bind(this)} />
              <label htmlFor="email">Email</label>
            </div>
          </div>

         <div className="row">
           <div className="input-field col s6">
           <i className="material-icons prefix">lock</i>
           <input id="password" type="password" className="validate" onChange={this.setChange.bind(this)} />
            <label htmlFor="password">Password</label>
           </div>
           <div className="input-field col s6">
             <i className="material-icons prefix">lock</i>
             <input id="password" type="password" className="validate" onChange={this.setChange.bind(this)} />
             <label htmlFor="password">Confirm Password</label>
           </div>
         </div>

          <button className="btn waves-effect waves-light light-green darken-3" type="submit" name="action">Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

SignupPage.propTypes = {
  // userSignupRequest: React.PropTypes.func.isRequired,
  // addFlashMessage: React.PropTypes.func.isRequired
}

export default SignupPage;