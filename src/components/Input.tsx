import * as React from 'react';

interface InputProps {
  placeholder: string;
  text: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

class Input extends React.PureComponent<InputProps> {
  render() {
    const {
      onChange,
      placeholder,
      text,
      type,
    } = this.props;

    return (
      <>
        <input
          placeholder={placeholder}
          // tslint:disable-next-line:no-any
          onChange={(e: any) => onChange(e.target)}
          type={type}
          value={text}
        />
      </>
    )
  }
}

export default Input;