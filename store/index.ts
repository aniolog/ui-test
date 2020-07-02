import { applyMiddleware, createStore } from 'redux';
import { AppState } from './state';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { initState } from './reducers/reducer';

const initialState = {
    app: initState
}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...[thunk])));


export default store;