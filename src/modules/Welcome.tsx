import * as React from 'react';
import Button from '../components/Button';
import {
  Link,
} from "react-router-dom";
import { logOut } from 'redux/actions';
import { connect } from 'react-redux'
import { StoreState } from '../redux/reducers';

interface WelcomeProps {
  logOut: typeof logOut;
}

class Welcome extends React.PureComponent<WelcomeProps> {
  render() {
    const { logOut } = this.props;

    return (
      <>
        <div className="app" >
          <h1 className="center">Congratulations! You've Successfully logged in.</h1>
          <Link to='/'>
            <Button
              type="submit"
              onClick={() => logOut()}
              label="Log out"
            />
          </Link>
        </div >
      </>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoggedIn: state.isLoggedIn
})

export const WelcomeWrapped = connect(mapStateToProps, { logOut })(Welcome)