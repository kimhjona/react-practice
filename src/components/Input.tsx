import * as React from 'react';

interface InputProps {
  placeholder: string;
  // tslint:disable-next-line:no-any
  store: { dispatch: (text: any) => void, getState: any };
  type: string;
  onChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

class Input extends React.PureComponent<InputProps> {
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