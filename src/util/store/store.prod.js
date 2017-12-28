import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from 'reducers';

export default function configureStore() {
    console.log('prod')

    const store = createStore(
        allReducers,
        compose(applyMiddleware(thunk)),
    );

    return store;
}