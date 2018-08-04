const SAVE_TEXT_INPUT = "SAVE_TEXT_INPUT"
const SAVE_PASSWORD_TEXT_INPUT = "SAVE_PASSWORD_TEXT_INPUT"
const CLEAR = "CLEAR"
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

export const saveTextInput = (text: string) => (
  { type: SAVE_TEXT_INPUT, text }
)

export const savePasswordTextInput = (text: string) => (
  { type: SAVE_PASSWORD_TEXT_INPUT, text }
)

export const resetForm = () => (
  { type: CLEAR }
)

export const logIn = () => (
  { type: LOGIN }
)

export const logOut = () => (
  { type: LOGOUT }
)