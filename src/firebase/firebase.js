import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAEKeXrdUDYc_w4JNFNJduNclTlYFPiai4",
    authDomain: "gondrand-6410c.firebaseapp.com",
    databaseURL: "https://gondrand-6410c.firebaseio.com",
    projectId: "gondrand-6410c",
    storageBucket: "gondrand-6410c.appspot.com",
    messagingSenderId: "1033930837677"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};