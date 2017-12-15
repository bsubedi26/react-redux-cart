import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from 'reducers';

export default function configureStore() {

    const store = createStore(
        allReducers,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ),
    );

    return store
}