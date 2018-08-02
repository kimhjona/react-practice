import * as React from 'react';
import {
  // resetForm,
  // submitButton,
} from '../redux/actions';

interface ButtonProps {
  label: string;
  // tslint:disable-next-line:no-any
  store: { dispatch: (text: any) => void, getState: any };
  type: string;
  onClick: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

class Button extends React.Component<ButtonProps> {
  onSubmit = () => {
    // const { type, store } = this.props;
    console.log("subimt?")

    // type === "submit" ?
    //   store.dispatch(submitButton()) :
    //   store.dispatch(resetForm());
  }

  render() {
    const { onClick, label, type } = this.props;

    return (
      <>
        <button
          // tslint:disable-next-line:no-any
          onClick={(e: any) => onClick(e)}
          onSubmit={this.onSubmit}
          className="button-styles"
          type={type}
        >{label}</button>
      </>
    )
  }
}


export default Button;