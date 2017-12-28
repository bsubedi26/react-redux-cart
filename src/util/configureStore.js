import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from 'reducers';
import freeze from 'redux-freeze';


export default function configureStore() {
    let isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
        let store = createStore(
            allReducers,
            compose(applyMiddleware(thunk)),
        );
    }
    else {
        let store = createStore(
            allReducers,
            compose(
                applyMiddleware(thunk, freeze),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            ),
        );
    }

    return store;
}
