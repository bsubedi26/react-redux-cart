import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const browserHistory = {}
export default function BaseComponent(PassedComponent) {
    class Authenticate extends React.Component {

        componentWillMount() {
            if (this.props.isAuthenticated === false) {
                browserHistory.push('/login-auth')
            }
        }

        componentWillUpdate(nextProps) {
            if (nextProps.isAuthenticated === false) {
                browserHistory.push('/login-auth')
            }
        }

        render() {
            return (
                <PassedComponent {...this.props} />
            )
        }
    }


    Authenticate.propTypes = {
       isAuthenticated: PropTypes.bool.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.usersReducer.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate);

}
