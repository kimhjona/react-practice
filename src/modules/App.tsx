import * as React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import {
  isLoggedIn,
  resetForm,
  saveTextInput,
} from '../redux/actions';
import '../styles/app.scss';
import { setPassword } from "../password";
import { Redirect } from 'react-router-dom';

interface AppProps {
  // tslint:disable-next-line:no-any
  store: { dispatch: (text: object) => void, getState: any };
  label?: string;
}

class App extends React.Component<AppProps> {
  state = {
    isErrorMsgShown: false,
    password: "",
  }
  onButtonClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { store } = this.props;
    if (e.target.type === "submit") {
      this.onSubmit(e);
    } else {
      this.forceUpdate()
      this.setState({ isErrorMsgShown: false })

      return store.dispatch(resetForm())
    };
  }
  // tslint:disable-next-line:no-any
  onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { password } = this.state;
    const { store } = this.props;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const username = store.getState().text;
    e.preventDefault();

    if (regex.test(username) && password === setPassword) {
      console.log("success?")
      this.forceUpdate();

      return store.dispatch(isLoggedIn())

    } else {
      this.setState({ isErrorMsgShown: true })
    }
  }

  updateInput = (target: { value: string, type: string }) => {
    const { store } = this.props;

    target.type === "text" ?
      store.dispatch(saveTextInput(target.value)) :
      this.setState({ password: target.value });
  }

  render() {
    const { isErrorMsgShown } = this.state;
    const { store, label } = this.props;

    console.log("label", label);

    if (store.getState().isLoggedIn) {

      return <Redirect to="/welcome" />
    };

    return (
      <div className={"app"}>
        <h1>Login Form</h1>
        <form
          onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => (
            this.onSubmit(e)
          )}
          className="form"
        > {
            label
          }
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
              store={store}
              type={"text"}
            />
            <Input
              // tslint:disable-next-line:no-any
              onChange={(e: any) => this.updateInput(e)}
              placeholder={"Password..."}
              store={store}
              type={"password"}
            />
          </span>
          <Button
            label={"Submit"}
            store={store}
            type={"submit"}
            onClick={(e: React.ChangeEvent<HTMLFormElement>) => this.onButtonClick(e)}
          />
          <Button
            label={"Reset"}
            store={store}
            type={"reset"}
            onClick={(e: React.ChangeEvent<HTMLFormElement>) => this.onButtonClick(e)}
          />
        </form>
      </div>
    )
  }
}

export default App;