import React, { Component } from 'react';
import firebase from 'firebase';
import styles from './login.css';
import fbAuth from './firebaseApp.js';

class Login extends Component {
  constructor() {
    super();
    this.changeLogin = this.changeLogin.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this);
    this.changeUserType = this.changeUserType.bind(this);
    this.state = {
      showSignIn: true,
      loggedIn: false,
      userType: 'student',
      isStudent: true
    }
  }

  changeLogin(event) {
    if(event.target.value === "INN") {
      this.setState({
        showSignIn: true
      });
    } else {
      this.setState({
        showSignIn: false
      });
    }
  }

  changeUserType(event) {
    console.log(event.target.value);    // TODO: remove, used for debugging
    if(event.target.value === "stud") {
      this.setState({
        userType: 'student',
        isStudent: true
      });
    } else if(event.target.value === "prof") {
      this.setState({
        userType: 'professor',
        isStudent: false
      });
    } else {
      console.log("Something went wrong with selecting user type"); // TODO: remove, used for debugging
    }
  }

  login(event) {
    console.log("logging in...");   // TODO: remove, used for debugging
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
    var username = user.value;
    var password = pass.value;
    if (username == "" || password == ""){
  		alert("Both username and password must contain some data");
  		return;
	  }
    if(!username.match("[a-zA-Z]")) {
      alert("Username can only contain letters");
      return;
    }
    if(password.length < 4) {
      alert("Password must be longer than 4 characters");
      return;
    }
    if(this.state.userType === "professor") {
      username += "@ntnu.no";
    }
    if(this.state.userType === "student") {
      username += "@stud.ntnu.no";
    }
    fbAuth.signInWithEmailAndPassword(username, password)
      .catch(error => alert(error.message));
  }

  logout(event) {
    console.log("logging out...");    // TODO: remove, used for debugging
  }

  signup(event) {
    console.log("signing up...");   // TODO: remove, used for debugging
  }

  render() {
    return(
      <div className={styles.loginwrap}>
        <div className={styles.loginhtml}>
          <div onChange={this.changeLogin}>
            <input id="tab1" type="radio" value="INN" name="tab" className={styles.signin} />
            <label htmlFor="tab1" className={styles.tab}>Sign In</label>
            <input id="tab2" type="radio" value="UP" name="tab" className={styles.signup} />
            <label htmlFor="tab2" className={styles.tab}>Sign Up</label>
          </div>
          <div className={styles.loginform}>
            <div className={styles.signinhtm}>
              <div className={styles.group}>
                <label htmlFor="user" className={styles.labels}>NTNU-brukernavn</label>
                <input id="user" type="text" className={styles.forminput} />
              </div>
              <div className={styles.group}>
                <label htmlFor="pass" className={styles.labels}>Password</label>
                <input id="pass" type="password" className={styles.forminput} data-type="password" />
              </div>
              {this.state.showSignIn ?
                <div>
                  <div className={styles.group}>
                    <input type="radio" id="r1" name="rr" value="stud" onChange={this.changeUserType} checked={this.state.userType === "student"} />
                    <label htmlFor="r1"><span></span>Student</label>
                    <input type="radio" id="r2" name="rr" value="prof" onChange={this.changeUserType} checked={this.state.userType === "professor"} />
                    <label htmlFor="r2"><span></span>Professor</label>
                  </div>
                  <SignIn onClick={(e) => this.login()} />
                </div>
              :
                <SignUp onClick={(e) => this.signup()} />
              }
            </div>
          </div>
        </div>
        {this.state.loggedIn ? <button id="logout" className={styles.button} onClick={this.logout} >Logout</button> : <span></span>}
      </div>
    );
  }
}

function SignIn(props) {
  // TODO: replace the <a> in this function with something that actually works
  return(
    <div>
      <div className={styles.group}>
        <button id="btnLogin" className={styles.button} onClick={() => props.onClick()} >Sign In</button>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.footlnk}>
        <a href="#forgot">Forgot Password?</a>
      </div>
    </div>
  );
}

function SignUp(props) {
  // TODO: replace the <a> in this function with something that actually works
  return(
    <div>
      <div className={styles.group}>
        <button id="R_btnLogin" className={styles.button} onClick={() => props.onClick()} >Sign Up</button>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.footlnk}>
        <a href="#tab1">Already Member?</a>
      </div>
    </div>
  );
}

firebase.auth().onAuthStateChanged(user => {
	console.log("signed inn");
});

export default Login;
