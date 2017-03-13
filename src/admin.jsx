import React, {Component} from 'react';

const firebase = require('./firebaseApp.js').firebase;
const dbRef = require('./firebaseApp.js').database;

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      professorList: null
    }
  }

  createProfessor() {
    var user = document.getElementById('R_profID');
    var pass = document.getElementById('R_profPass');
    if(!user.value.math("[a-zA-Z]")) {
      alert("Invalid username, please use the NTNU username");
      return;
    }
    if(user.value != "" || pass.value.lengt > 4) {
      firebase.auth().createUserWithEmailAndPassword(user.value + "@ntnu.no", pass.value)
        .then(function(user){
          updateProf(user);
          user.value = "";
          pass.value = "";
        });
    }
  }

  updateProf(prof) {
    if(prof) {
      dbRef.ref().child("users/professors/"+JSON.stringify(prof.uid)).set({
        username: prof.email
      }).then(function() {
        alert("Professor created!");
      });
    }
  }

  getAllProfessors() {
    var professors = [];
    dbRef.ref().child("users/professors").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnap) {
        professors.push(childSnap.val().username);
      });
      console.log(professors);
      this.setState({
        professorList: professors
      });
    });
  }

  logout(event) {
    console.log("logging out...");    // TODO: remove, used for debugging
    firebase.auth().signOut().catch(error => alert(error.message));
  }

  render() {
    this.getAllProfessors();
    return(
      <div id="makeProfessorAccount">
        <label>New professor username</label>
        <input id="R_profID" type="text" placeholder="Type in username" /><br />
        <label>New professor password</label>
        <input id="R_profPass" type="password" placeholder="Type in password" /><br />
        <button onClick={this.createProfessor}>Submit</button>
        <br />
        <div>
          <ul id="allStudents"></ul>
        </div>
        <div>
          <ul id="allProfessors">{this.state.professorList}</ul>
        </div>
        <div>
          <ul id="allSubjects"></ul>
        </div>
        <button onClick={this.logout}>Log out</button>
      </div>
    );
  }
}

export default Admin;
