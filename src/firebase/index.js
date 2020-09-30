// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgQNQU4bUrqK91wYQNSBCm3dvr0o9qO4o",
    authDomain: "petstore-29594.firebaseapp.com",
    databaseURL: "https://petstore-29594.firebaseio.com",
    projectId: "petstore-29594",
    storageBucket: "petstore-29594.appspot.com",
    messagingSenderId: "365802900812",
    appId: "1:365802900812:web:88687681de1e4e7ec713e9",
    measurementId: "G-6N4PFW5JHS"
};
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}