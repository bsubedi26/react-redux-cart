import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from 'reducers';
import freeze from 'redux-freeze';

export default function configureStore() {
    const store = createStore(
        allReducers,
        compose(
            // applyMiddleware(thunk, freezer()),
            applyMiddleware(thunk, freeze),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ),
    );

    return store
}