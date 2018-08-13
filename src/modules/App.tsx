import * as React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import {
  logIn,
  resetForm,
  saveTextInput,
} from '../redux/actions';
import '../styles/app.scss';
import { setPassword } from "../password";
import { connect } from 'react-redux'
import { StoreState } from '../redux/reducers';

interface AppProps {
  history?: { action: string }
  text: string;
  logIn: typeof logIn;
  resetForm: typeof resetForm;
  saveTextInput: typeof saveTextInput,
}

class App extends React.Component<AppProps> {
  state = {
    isErrorMsgShown: false,
    password: "",
  }

  onButtonClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { resetForm } = this.props;
    if (e.target.type === "submit") {
      this.onSubmit(e);
    } else {
      this.setState({ isErrorMsgShown: false, password: "" })
      resetForm()
    };
  }

  onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { password } = this.state;
    const { logIn, text } = this.props;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const username = text;
    e.preventDefault();
    regex.test(username) && password === setPassword ?
      logIn() :
      this.setState({ isErrorMsgShown: true })
  }

  updateInput = (target: { value: string, type: string }) => {
    const { saveTextInput } = this.props;

    target.type === "text" ?
      saveTextInput(target.value) :
      this.setState({ password: target.value });
  }

  render() {
    const { isErrorMsgShown, password } = this.state;
    const { history, text } = this.props;

    return (
      <div className={"app"}>
        <h1>Login Form</h1>
        <form
          onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => (
            this.onSubmit(e)
          )}
          className="form"
        >
          {history && history.action === "REPLACE" ? "You must be logged in to continue" : ""}
          {isErrorMsgShown ?
            <div className="error-msg center">Error: your login information is incorrect. Try again.</div>
            :
            <div className="error-msg" />
          }
          <span className="inputContainer">
            <Input
              // tslint:disable-next-line:no-any
              onChange={(e: any) => this.updateInput(e)}
              placeholder={"Email Address"}
              text={text}
              type={"text"}
            />
            <Input
              // tslint:disable-next-line:no-any
              onChange={(e: any) => this.updateInput(e)}
              placeholder={"Password..."}
              text={password}
              type={"password"}
            />
          </span>
          <Button
            label={"Submit"}
            type={"submit"}
            onClick={(e: React.ChangeEvent<HTMLFormElement>) => this.onButtonClick(e)}
          />
          <Button
            label={"Reset"}
            type={"reset"}
            onClick={(e: React.ChangeEvent<HTMLFormElement>) => this.onButtonClick(e)}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoggedIn: state.isLoggedIn,
  text: state.text,
})

export const AppWrapped = connect(mapStateToProps, {
  logIn,
  resetForm,
  saveTextInput,
})(App)