import axios from 'axios';
import { browserHistory } from 'react-router';

export function userCreate(userData) {
  console.log('user create action triggered');
    return dispatch => {
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
                console.log('response', response)
                dispatch({
                    type: 'LOGIN',
                    response: response,
                    isAuthenicated: true
                })
                browserHistory.push('/');
                
            })
    }
}