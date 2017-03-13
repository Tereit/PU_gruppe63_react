import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Lecture from './lecture.jsx';
import Admin from './admin.jsx';

const firebase = require('./firebaseApp.js').firebase;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      isAdmin: false
    }
    firebase.auth().onAuthStateChanged(user => {
    	if(user){
        console.log("signed inn");
        this.setState({
          loggedIn: true
        });
        if(user.email === "admintest@stud.ntnu.no") {
          this.setState({
            isAdmin: true
          });
        }
      }
      if(!user) {
        console.log("signed out");
        this.setState({
          loggedIn: false
        });
      }
      this.load();
    });
  }
  load() {
    if(this.state.loggedIn) {
      if(this.state.isAdmin) {
        return(<Admin />);
      } else {
        return(<Lecture />);
      }
    } else {
      return(<Login />)
    }
  }
  render() {
    return (
      <div>
        {this.load()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
