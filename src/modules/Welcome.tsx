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
    console.log("this.props succes", this.props);
    if (store.getState().isLoggedIn) {

      return (
        <Success store={store} />
      )
    } else {


      return <Redirect to="/" />
    }
  }
}

export default Welcome;