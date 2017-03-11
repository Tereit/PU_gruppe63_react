import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';

class App extends Component {
  render() {
    return (
      <div>
        This is the REACT App!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
