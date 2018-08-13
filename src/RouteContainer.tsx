import * as React from 'react';
import { AppWrapped as App } from './modules/App';
import { WelcomeWrapped as Welcome } from './modules/Welcome';
import {
  Redirect,
  Route,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { connect } from 'react-redux';
import { logIn } from 'redux/actions';
import { StoreState } from 'redux/reducers';

interface RouteContainerProps extends RouteComponentProps<{}> {
  isLoggedIn: boolean;
}

export class RouteContainer extends React.PureComponent<RouteContainerProps> {
  render() {
    const { isLoggedIn, location } = this.props;

    if (!isLoggedIn && location.pathname === "/welcome") {
      return <Redirect to="/" />
    } else if (isLoggedIn && location.pathname === "/") {
      return <Redirect to="/welcome" />
    }

    return (
      <div>
        <Route
          exact={true}
          path="/"
          component={App}
        />
        <Route
          path="/welcome"
          component={Welcome}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoggedIn: state.isLoggedIn
})

export const RouteContainerWrapped = withRouter(connect(mapStateToProps, { logIn })(RouteContainer));
