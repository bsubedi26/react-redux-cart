import axios from 'axios';
import { browserHistory } from 'react-router';
import setAuthorizationToken from '../auth/setAuthorizationToken';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
}

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
                // console.log('token', response.data.token)
                localStorage.setItem('token', response.data.token);
                setAuthorizationToken(localStorage.token);
                // store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
                dispatch({
                    type: 'LOGIN',
                    token: response.data.token,
                    isAuthenicated: true
                })
                browserHistory.push('/');
                
            })
    }
}

// function receiveLogin(user) {
//   return {
//     type: LOGIN_SUCCESS,
//     isFetching: false,
//     isAuthenticated: true,
//     id_token: user.id_token
//   }
// }

// function loginError(message) {
//   return {
//     type: LOGIN_FAILURE,
//     isFetching: false,
//     isAuthenticated: false,
//     message
//   }
// }