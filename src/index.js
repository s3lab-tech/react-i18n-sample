import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


const initialDictState = {
  lang: 'ja',
  dict: require("./locales/ja/translation.json")
}

const dictReducer = (state=initialDictState, action) => {
  switch (action.type) {
    case 'changeDict':
      return {
        lang: action.payload,
        dict: require("./locales/" + action.payload + "/translation.json")
      };

    default:
      return state;
  }
}

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  dict: dictReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, {
  dict: initialDictState
});

const persistor = persistStore(store);

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
