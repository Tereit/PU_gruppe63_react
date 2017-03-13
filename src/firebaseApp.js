import firebase from 'firebase';

var config = {
  apiKey : "AIzaSyA3wCVMG1f33-WnafKkgF6cNtnoDFJB_IM",
  authDomain : "lecturify.firebaseapp.com",
  databaseURL : "https://lecturify.firebaseio.com",
  storageBucket : "lecturify.appspot.com",
  messagingSenderId : "946578632705"
};
var fbApp = firebase.initializeApp(config);

module.exports.fbAuth = fbApp.auth();
module.exports.fbData = fbApp.database();
