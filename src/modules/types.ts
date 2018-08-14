import { logIn, logOut, resetForm, saveTextInput } from "redux/actions";
export { StoreState } from "redux/reducer";

export interface AppProps {
  emailAddress: string;
  isLoggedIn: boolean;
  logIn: typeof logIn;
  password: string;
  resetForm: typeof resetForm;
  saveTextInput: typeof saveTextInput;
}

export interface AppState {
  errorMessage: string;
}

export interface WelcomeProps {
  logOut: typeof logOut;
}
