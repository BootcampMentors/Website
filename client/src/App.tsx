import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* 
            maybe try and use the logo as an svg? that would make it very nice because they are vectors
          */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Brand New Project</h1>
      </div>
    );
  }
}

export default App;