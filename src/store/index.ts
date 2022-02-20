import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { accountReducer } from "./account/reducer";
import { setAuthToken } from '../helpers';
import { usersReducer } from "./users/reducers";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account', 'users']
}

const rootReducer = combineReducers({
  account: accountReducer,
  users: usersReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppState = ReturnType<typeof rootReducer>;

function configureStore() {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  return createStore(persistedReducer, composeEnhancers(middlewareEnhancer));
}

const store = configureStore();
const persistor = persistStore(store);

let currentState = store.getState() as AppState;
store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState() as AppState;
  if(previousState.account.token !== currentState.account.token) {
    const token = currentState.account.token;
    if(token) {
      setAuthToken(token);
    }
  }
});

export {store, persistor};