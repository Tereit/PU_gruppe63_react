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
      isProfessor: false,
			isStudent: false,
      isAdmin: false,
    }
    firebase.auth().onAuthStateChanged(user => {
    	if(user){
				this.setState({
					loggedIn: true
				})
				if(user.email.includes("@ntnu.no")){
					this.setState({
						isProfessor: true,
					})
				}
        else if(user.email === "admintest@stud.ntnu.no") {
          this.setState({
            isAdmin: true
          });
        }
				else{
					this.setState({
						isStudent: true,
					})
				}
      }
      else{
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
			}
			else if(this.state.isProfessor){
				return(<Professor />)
			}
			else{
				return(<Student />)
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
