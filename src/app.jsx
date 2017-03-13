import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Lecture from './lecture.jsx';

const firebase = require('./firebaseApp.js').firebase;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
    firebase.auth().onAuthStateChanged(user => {
    	if(user){
        console.log("signed inn");
        this.setState({
          loggedIn: true
        });
      }
      if(!user) {
        console.log("signed out");
        this.setState({
          loggedIn: false
        });
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.loggedIn ? <Lecture /> : <Login />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
