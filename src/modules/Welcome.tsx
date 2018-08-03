import * as React from 'react';
import Success from '../components/Success';
import {
  Redirect
} from "react-router-dom";

interface WelcomeProps {
  // tslint:disable-next-line:no-any
  store: { dispatch: (text: any) => void, getState: any };
}

class Welcome extends React.PureComponent<WelcomeProps> {
  render() {
    const { store } = this.props;

    return (
      <>
        {
          store.getState().isLoggedIn ?
            <Success store={store} /> :
            <Redirect to="/" />
        }
      </>
    )
  }
}

export default Welcome;