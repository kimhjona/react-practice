import { CLEAR, LOGIN, LOGOUT, TEXT_INPUT } from "./constants";

export const saveTextInput = ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => ({ type: TEXT_INPUT, field, value });

export const resetForm = () => ({ type: CLEAR });

export const logIn = () => ({ type: LOGIN });

export const logOut = () => ({ type: LOGOUT });
