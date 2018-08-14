import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouteContainerWrapped as RouteContainer } from "./RouteContainer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { reducer } from "redux/reducer";
import "styles/app.scss";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    {/* loading={null} ?? */}
    <PersistGate persistor={persistor}>
      <Router>
        <RouteContainer />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
