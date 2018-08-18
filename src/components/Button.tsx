import React from "react";

interface ButtonProps {
  // maybe text would be a better name? labels are usually in reference for form inputs
  label: string;
  onClick: () => void;
}

export class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { onClick, label } = this.props;

    return (
      // no need for a fragment
      // <>
      <button onClick={onClick} className="button-styles">
        {label}
      </button>
      // </>
    );
  }
}
