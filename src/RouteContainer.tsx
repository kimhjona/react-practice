import * as React from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";

import { AppWrapped as App } from "modules/App";
import { WelcomeWrapped as Welcome } from "modules/Welcome";
import { logIn } from "redux/actions";
import { StoreState } from "redux/reducer";

interface RouteContainerProps extends RouteComponentProps<{}> {
  isLoggedIn: boolean;
}

export class RouteContainer extends React.PureComponent<RouteContainerProps> {
  render() {
    const { isLoggedIn, location } = this.props;
    // future proofing your authorization
    if (!isLoggedIn && location.pathname !== "/") {
      return <Redirect to="/" />;
    } else if (isLoggedIn && location.pathname === "/") {
      return <Redirect to="/welcome" />;
    }

    return (
      // use react fragments if you don't need a wrapping element
      <>
        <Route exact={true} path="/" component={App} />
        <Route path="/welcome" component={Welcome} />
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoggedIn: state.isLoggedIn,
});

export const RouteContainerWrapped = withRouter(
  connect(
    mapStateToProps,
    { logIn }
  )(RouteContainer)
);
