/**
 * Store
 */

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

const enhancer = compose(
    applyMiddleware(thunk)
);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}
