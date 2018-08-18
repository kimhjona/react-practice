import React from "react";
import { connect } from "react-redux";

import { Button, Input } from "components";
// you already imported this in index.tsx
// import "../styles/app.scss";
import { logIn, resetForm, saveTextInput } from "redux/actions";
// this isn't a great name. it implies an action is being taken whereas this is just a constant
import { setPassword } from "../password";
import { AppProps, AppState, StoreState } from "./types";

// create interfaces for your state
class App extends React.Component<AppProps, AppState> {
  state = {
    // avoid using shorthand (msg). be as explicit as possible. I changed this to a string so that you can more easily display a variety of error messages
    errorMessage: "",
  };

  // you should always strive to have a separation of concerns. a function should do one thing.
  reset = () => {
    this.setState({ errorMessage: "" });
    this.props.resetForm();
  };

  submit = () => {
    const { logIn, emailAddress, password } = this.props;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isFormValid = regex.test(emailAddress) && password === setPassword;

    if (isFormValid) {
      logIn();
    } else {
      this.setState({
        errorMessage: "Error: your login information is incorrect. Try again.",
      });
    }
  };

  onFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {
    const { errorMessage } = this.state;
    const { saveTextInput, password, emailAddress } = this.props;

    return (
      <div className="app">
        <h1>Login Form</h1>
        <form className="form" onSubmit={this.onFormSubmit}>
          {errorMessage !== "" && (
            <div className="error-msg center">{errorMessage}</div>
          )}
          {/* don't use span as a block container. use a div instead. */}
          <div className="inputContainer">
            <Input
              field="emailAddress"
              onChange={saveTextInput}
              // you don't need to wrap strings in an object when passing them as props
              placeholder="Email Address"
              type="text"
              value={emailAddress}
            />
            <Input
              field="password"
              onChange={saveTextInput}
              placeholder="Password..."
              type="password"
              value={password}
            />
          </div>
          <Button label="Submit" onClick={this.submit} />
          <Button label="Reset" onClick={this.reset} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  emailAddress: state.emailAddress,
  isLoggedIn: state.isLoggedIn,
  password: state.password,
});

export const AppWrapped = connect(
  mapStateToProps,
  {
    logIn,
    resetForm,
    saveTextInput,
  }
)(App);
