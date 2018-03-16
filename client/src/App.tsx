import * as React from 'react';
import './App.css';
import { Nav } from './components/nav/Nav';
import { FrontPage } from './components/front-page/FrontPage';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { AboutUs } from './components/about/About';
import { Footer } from './components/footer/Footer';
import SignUp from './components/sign-up/SignUp';

export interface IProps {
}

export interface IState {
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact={true} path="/" component={FrontPage} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
