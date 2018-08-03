import * as React from 'react';
import App from '../modules/App';

interface AppContainerProps {
  // tslint:disable-next-line:no-any
  store: { dispatch: (text: any) => void, getState: any };
  history?: { action?: string }
}

class AppContainer extends React.PureComponent<AppContainerProps> {
  render() {
    const { store } = this.props;
    const { history } = this.props;

    return (
      <>
        <App
          store={store}
          label={
            history && history.action === "REPLACE" ?
              "You must be logged in" :
              ""
          }
        />
      </>
    )
  }
}

export default AppContainer;

