import * as React from 'react';

interface ButtonProps {
  label: string;
  // tslint:disable-next-line:no-any
  type: string;
  onClick: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

class Button extends React.PureComponent<ButtonProps> {


  render() {
    const { onClick, label, type } = this.props;

    return (
      <>
        <button
          // tslint:disable-next-line:no-any
          onClick={(e: any) => onClick(e)}
          className="button-styles"
          type={type}
        >
          {label}
        </button>
      </>
    )
  }
}


export default Button;