import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles/app.scss';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";
import { createStore } from 'redux';
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

const AppContainer = (): JSX.Element => (
  <>
    <App store={store} />
  </>
)

const Success = (): JSX.Element => (
  <div className="app">
    <h1 className="center">Congratulations! You've successfully logged in.</h1>
    <Link to="/">
      <button className="button-styles">
        Log Out
    </button>
    </Link>
  </div>
)

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
          <Route
            exact={true}
            path="/"
            component={AppContainer}
          />
          <Route
            path="/welcome"
            component={Success}
          />
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
