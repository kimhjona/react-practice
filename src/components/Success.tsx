
import * as React from 'react';
import Button from './Button'
import {
  logOut,
} from '../redux/actions';
import {
  Link,
} from "react-router-dom";

interface SuccessProps {
  // tslint:disable-next-line:no-any
  store: { dispatch: (text: any) => void, getState: any };
}

class Success extends React.PureComponent<SuccessProps> {
  onButtonClick = () => {
    const { store } = this.props;
    store.dispatch(logOut());
  }

  render() {
    const { store } = this.props;

    return (
      <div className="app" >
        <h1 className="center">Congratulations! You've Welcomefully logged in.</h1>
        <Link to={{
          pathname: '/',
          state: { hello: "hi" }
        }}>
          <Button
            type="submit"
            onClick={this.onButtonClick}
            label="Log out"
            store={store}
          />
        </Link>
      </div >
    )
  }
}



export default Success;