import React, { Component } from 'react';
import {logoutUser} from "./firebaseAPI";

const firebase = require('./firebaseApp.js').firebase;
const database = require('./firebaseApp.js').database;

class StudentPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      selected: "lectures"
    }
  }

	handleLogout(){
		logoutUser().then(function(){
			console.log("signed out sucsessfully")
		})
	}

  load(){
    return(
    <div id = "studentPage">
      <div id = "upperContent">
				<button onClick={this.handleLogout}>Logout</button>
      </div>
      <div id = "selectContent">
        <div id="subjects">
          "Subjects"
        </div>
        <div id="lectures">
          "Lectures"
        </div>
      </div>
      <div id = "mainContent">
      </div>
    </div>
    )
  }

  render(){
    return (
      <div>
        {this.load()}
      </div>
    )
  }
}

class LectureContent extends Component{
  constructor(props){
    super(props);
    this.lectures = [];
    this.state = {
      user: user
    }
  }

  loadLectures(){
    return(
      <div></div>
    );
  }


  load(){
    return(
      <div>
        <div> "Today" </div>
        <div id = "lecturesToday">
        </div>
        <div> "Later:" </div>
        <div id = "lecturesLater"></div>
      </div>
    );
  }

  render(){
    <div>
      {this.load()}
    </div>
  }
}

class SubjectsContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: user
    }
  }
  load(){
    return(
      <div>
        <div> "Your Subjects" </div>
        <div id = "subscribedSubjects">
        </div>
        <div> "Other Subjects:" </div>
        <div id = "notSubscribedSubjects"></div>
      </div>
    )
  }

  render(){
    <div>
      {this.load()}
    </div>
  }
}

export default StudentPage;
