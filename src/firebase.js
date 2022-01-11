import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
  projectId: "space-burger-e00af",
  appId: "1:61212794352:web:825a50d7e7e2bedb391135",
  storageBucket: "space-burger-e00af.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyDFBKJtAm7Y12-tiae_TQcM-1V1SIF1W4A",
  authDomain: "space-burger-e00af.firebaseapp.com",
  messagingSenderId: "61212794352",
});
