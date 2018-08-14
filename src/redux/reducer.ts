import { CLEAR, LOGIN, LOGOUT, TEXT_INPUT } from "./constants";

interface ActionParams {
  type: string;
  field: string;
  value: string;
}

export interface StoreState {
  emailAddress: string;
  isLoggedIn: boolean;
  password: string;
}

// you should always have an initial state
const initialState: StoreState = {
  emailAddress: "",
  isLoggedIn: false,
  password: "",
};

// call it a reducer
export const reducer = (state = initialState, action: ActionParams) => {
  switch (action.type) {
    case TEXT_INPUT: {
      const { field, value } = action;

      return { ...state, [field]: value };
    }
    // is this being used for anything?
    // case "SUBMIT":
    //   return { ...state };
    case LOGOUT:
    case CLEAR:
      return initialState;
    case LOGIN:
      return { ...state, isLoggedIn: true };
      break;
    default:
      return state;
  }
};

// no default exports
// export default inputFunctions;
