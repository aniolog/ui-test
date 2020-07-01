import { Middleware, StoreEnhancer, applyMiddleware, createStore, Store, combineReducers, Reducer } from 'redux';
import getConfig from 'next/config';
import { AppState, GlobalState } from './state';
import { AppActions } from './actions';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';

export type AppStore = Store<GlobalState, AppActions>;


function bindMiddleware(middleware: Middleware[]): StoreEnhancer {
    if (getConfig().publicRuntimeConfig.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension');
      return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}


const reducers: Reducer<GlobalState> = combineReducers<GlobalState>({
    app: reducer
});


function configureStore(initialState: GlobalState): AppStore {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      reducers,
      initialState,
      bindMiddleware([sagaMiddleware])
    )
  
    // @ts-ignore
    //store.sagaTask = sagaMiddleware.run(rootSaga)
  
    return store;
  }
  
  export default configureStore;