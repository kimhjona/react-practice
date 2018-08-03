import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import Welcome from './modules/Welcome';
// import Root from './modules/Root';
import './styles/app.scss';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {
  createStore,
  // applyMiddleware 
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
  // tslint:disable-next-line:no-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          {/* <Root
            store={store}
          /> */}
          <Route
            exact={true}
            path="/"
            render={props => <AppContainer {...props} store={store} />}
          />
          <Route
            path="/welcome"
            render={props => <Welcome {...props} store={store} />}
          />
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
