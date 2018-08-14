import * as React from "react";
// import { Link } from "react-router-dom";
import { logOut } from "redux/actions";
import { connect } from "react-redux";

import { Button } from "components";
import { StoreState, WelcomeProps } from "./types";

class Welcome extends React.PureComponent<WelcomeProps> {
  render() {
    const { logOut } = this.props;

    return (
      // no need for a fragment here since you're already wrapping everything in a div
      // <>
      <div className="app">
        <h1 className="center">
          Congratulations! You've Successfully logged in.
        </h1>
        {/* this wasn't doing anything. in routecontainer.ts youre controlling where a user goes when `isLoggedIn` changes. */}
        {/* <Link to="/"> */}
        <Button onClick={logOut} label="Log out" />
        {/* </Link> */}
      </div>
      // </>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoggedIn: state.isLoggedIn,
});

export const WelcomeWrapped = connect(
  mapStateToProps,
  { logOut }
)(Welcome);
