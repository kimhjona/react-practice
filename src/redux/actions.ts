const SAVE_TEXT_INPUT = "SAVE_TEXT_INPUT"
const SAVE_PASSWORD_TEXT_INPUT = "SAVE_PASSWORD_TEXT_INPUT"
const CLEAR = "CLEAR"
const ISLOGGEDIN = "ISLOGGEDIN"
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

export const isLoggedIn = () => (
  { type: ISLOGGEDIN }
)

export const logOut = () => (
  { type: LOGOUT }
)