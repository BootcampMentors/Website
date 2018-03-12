import * as React from 'react';
import './App.css';
import { getNav } from './components/nav/Nav';
import { getFrontPage } from './components/front-page/FrontPage';
export interface IProps {
}

export interface IState {
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  render() {

    const nav = getNav();
    const page = getFrontPage();
    return (
      <div className="App">
        {nav}
        {page}
      </div>
    );
  }
}

export default App;
