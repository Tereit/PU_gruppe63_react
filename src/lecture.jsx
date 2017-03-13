import React, {Component} from 'react';

const firebase = require('./firebaseApp.js').firebase;
const dbRef = require('./firebaseApp.js').database;

class Lecture extends Component {
  constructor(user) {
    super();
    this.state = {
      user: user,
      currentSubject: null,
      lectureDate: null
    }
  }

  logout(event) {
    console.log("logging out...");    // TODO: remove, used for debugging
    firebase.auth().signOut().catch(error => alert(error.message));
  }

  render() {
    return(
      <div>
        <p>Just a test</p>
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default Lecture;
