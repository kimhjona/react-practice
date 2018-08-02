
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
    case "SUCCESS":
      return { ...state, text: "", url: "welcome" }
    case "LOGOUT":
      return { ...state, url: "" }
      break;
    default:
      return state;
  }
}

export default inputFunctions;