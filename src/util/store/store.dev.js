import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import allReducers from 'reducers';

export default function configureStore() {
    const store = createStore(
        allReducers,
        compose(
            applyMiddleware(thunk, freeze),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ),
    );

    return store;
}