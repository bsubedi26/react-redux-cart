export function addToCart(product) {
    console.log('products action triggered')
    return {
        type: 'ADD',
        product
    }
}



// export function userSignupRequest(userData) {
//   return dispatch => {
//     return axios.post('/api/users/create', {user: userData});
//   }
// }
