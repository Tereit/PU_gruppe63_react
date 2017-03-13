import React, { Component } from 'react';

const firebase = require('./firebaseApp.js').firebase;
const database = require('./firebaseApp.js').database;

class StudentPage extends Component{
  constructor(){
    super(user);
    this.state = {
      selected: "lectures"
    }
  }

  load(){
    return(
    <div id = "studentPage">
      <div id = "upperContent">

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
  constructor(user){
    super();
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
  constructor(user){
    super();
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
