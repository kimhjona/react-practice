import * as React from 'react';

interface InputProps {
  placeholder: string;
  // tslint:disable-next-line:no-any
  store: { dispatch: (text: any) => void, getState: any };
  type: string;
  onChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const inputStyles = {
  border: "1px solid ##3e3f44",
  borderRadius: "4px",
  height: "30px",
  margin: "5px 0",
  padding: "0",
  width: "100%",
}

class Input extends React.Component<InputProps> {
  componentWillUpdate(nextProps: InputProps) {
    console.log("will update?")
    console.log(nextProps);
  }

  render() {
    const {
      onChange,
      placeholder,
      store,
      type,
    } = this.props;

    const defaultText = store.getState().text;

    return (
      <>
        <input
          placeholder={placeholder}
          style={inputStyles}
          // tslint:disable-next-line:no-any
          onChange={(e: any) => onChange(e.target)}
          type={type}
          defaultValue={type === "text" ? defaultText : ""}
        />
      </>
    )
  }
}

export default Input;