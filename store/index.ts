import { Middleware, StoreEnhancer, applyMiddleware, createStore, Store, combineReducers, Reducer } from 'redux';
import getConfig from 'next/config';
import { AppState, GlobalState } from './state';
import { AppActions } from './actions';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


export type AppStore = Store<GlobalState, AppActions>;


const reducers: Reducer<GlobalState> = combineReducers<GlobalState>({
    app: reducer
});

function configureStore(initialState: GlobalState): AppStore {
  const { composeWithDevTools } = require('redux-devtools-extension');
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...[sagaMiddleware]))
  )

  // @ts-ignore
  //store.sagaTask = sagaMiddleware.run(indexSaga)
  return store;
}

export default configureStore;
