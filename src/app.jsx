import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Admin from './admin.jsx';
import Professor from "./professor.jsx";
import Student from "./student.jsx";

const firebase = require('./firebaseApp.js').firebase;

class App extends Component {
  constructor() {
    super();
    this.state = {
			loggedIn: false,
			userType: "",
			uid: "",
    }
    firebase.auth().onAuthStateChanged(user => {
    	if(user){
				this.setState({
					loggedIn: true
				})
				if(user.email.includes("@ntnu.no")){
					this.setState({
						userType: "professors",
					})
				}
        else if(user.email === "admintest@stud.ntnu.no") {
          this.setState({
            userType: "admins"
          });
        }
				else{
					this.setState({
						userType: "students",
					})
				}
      }
      else{
        this.setState({
          loggedIn: false
        });
      }
      this.load();
    });
  }

  load() {
    if(this.state.loggedIn) {
      if(this.state.userType == "admins") {
        return(<Admin
					uid = {this.state.uid}
					userType = {this.state.userType}
					/>);
			}
			else if(this.state.userType == "professors"){
				return(<Professor
					uid = {this.state.uid}
					userType = {this.state.userType}
					/>)
			}
			else{
				return(<Student
					uid = {this.state.uid}
					userType = {this.state.userType}
					/>)
			}
    }
		else{
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
