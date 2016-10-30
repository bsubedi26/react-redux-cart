import axios from 'axios';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../auth/setAuthorizationToken';
import { showMessage } from './flashMessages';

export function userCreate(userData) {
  console.log('user create action triggered');
    return (dispatch, state) => {
        // console.log(Object.keys(Object.getPrototypeOf(state)))
        // console.log(state())

        axios.post('/api/users/create', {data: userData})
            .then(response => { 
                browserHistory.push('/login');
        })
    }
}

export function login(userData) {
    console.log('login action triggered');
    return dispatch => {
        axios.post('/api/users/login', {data: userData})
            .then(response => {
         
                if (response.data.error) {
                    dispatch(showMessage(response.data.error))
                }
                else {
                    setAuthorizationToken(response.data.token);
                    let userInfo = jwtDecode(response.data.token);
                    dispatch(setCurrentUser(userInfo, response.data.token, true))
                    browserHistory.push('/');
                }
            })
    }
}

export function setCurrentUser(user, token, authenticated) {
  return {
    type: 'SET_CURRENT_USER',
    user: user,
    token: token,
    isAuthenicated: authenticated
  };
}