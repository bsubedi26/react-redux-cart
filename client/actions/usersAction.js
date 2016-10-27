import axios from 'axios';

export function userCreate(userData) {
  console.log('user create action triggered');
    return dispatch => {
        axios.post('/api/users/create', {data: userData})
            .then(response => { dispatch({
                type: 'CREATE',
                response: response
            })}
            )
    }
}
