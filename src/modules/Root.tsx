import * as React from 'react';
import {
  Route
} from "react-router-dom";
import AppContainer from '../components/AppContainer'
import Welcome from './Welcome'

interface RootProps {
  // tslint:disable-next-line:no-any
  store: { dispatch: (text: object) => void, getState: any };
}

class Root extends React.PureComponent<RootProps> {

  render() {
    const { store } = this.props;

    return (
      <>
        <Route
          exact={true}
          path="/"
          render={() => <AppContainer store={store} />}
        />
        <Route
          path="/welcome"
          render={() => <Welcome store={store} />}
        />
      </>
    )
  }
}

export default Root;
