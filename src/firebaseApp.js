import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA3wCVMG1f33-WnafKkgF6cNtnoDFJB_IM",
    authDomain: "lecturify.firebaseapp.com",
    databaseURL: "https://lecturify.firebaseio.com",
    storageBucket: "lecturify.appspot.com",
    messagingSenderId: "946578632705"
};
var fb = firebase.initializeApp(config);

var auth = fb.auth();
var database = fb.database();

exports.auth = auth;
exports.database = database;
exports.firebase = fb;
