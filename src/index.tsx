import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouteContainerWrapped as RouteContainer } from './RouteContainer';
import './styles/app.scss';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {
  // applyMiddleware,
  createStore,
} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import inputFunctions from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, inputFunctions)

const store = createStore(
  persistedReducer,
  // composeWithDevTools(applyMiddleware())
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <RouteContainer />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
