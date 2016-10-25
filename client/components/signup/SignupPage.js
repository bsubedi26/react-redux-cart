var React = require('react');
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
// import { userSignupRequest } from '../../actions/signupActions';
// import { addFlashMessage } from '../../actions/flashMessages';
class SignupPage extends React.Component {
 
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
            // <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
            <SignupForm userSignupRequest='a' addFlashMessage='b'/>
            
        )
  }
};

SignupPage.propTypes = {
  // userSignupRequest: React.PropTypes.func.isRequired,
  // addFlashMessage: React.PropTypes.func.isRequired
}

export default connect( null )(SignupPage);