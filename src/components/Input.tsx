import React from "react";

interface InputProps {
  field: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: ({ field, value }: { field: string; value: string }) => void;
}

export class Input extends React.PureComponent<InputProps> {
  // define functions related to components in the component itself. this way you are controlling the onchange function in a single place.
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { field, onChange } = this.props;
    onChange({ field, value: e.currentTarget.value });
  };

  render() {
    const { placeholder, value, type } = this.props;

    return (
      // <>
      <input
        placeholder={placeholder}
        // the event automatically gets passed as the first parameter for event listeners so you don't have to define a callback
        onChange={this.onChange}
        type={type}
        value={value}
      />
      // </>
    );
  }
}
