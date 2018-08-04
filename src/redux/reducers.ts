
interface ActionParams {
  type: string;
  text?: string;
  username?: string;
}

const inputFunctions = (state: object, action: ActionParams) => {
  switch (action.type) {
    case "SAVE_TEXT_INPUT":
      return { ...state, text: action.text }
    case "SUBMIT":
      return { ...state }
    case "CLEAR":
      return { ...state, text: "" }
    case "LOGIN":
      return { ...state, text: "", isLoggedIn: true }
    case "LOGOUT":
      return { ...state, isLoggedIn: false }
      break;
    default:
      return state;
  }
}

export default inputFunctions;