import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { accountReducer } from "./account/reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account']
}

const rootReducer = combineReducers({
  account: accountReducer
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

let store = configureStore();
let persistor = persistStore(store);

export {store, persistor};