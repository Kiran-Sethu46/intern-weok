import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLMkGEwu80To7jFjx-9KiAc02UcbMCtaw",
  authDomain: "clone-9f1e2.firebaseapp.com",
  databaseURL: "https://clone-9f1e2.firebaseio.com",
  projectId: "clone-9f1e2",
  storageBucket: "clone-9f1e2.appspot.com",
  messagingSenderId: "186019838613",
  appId: "1:186019838613:web:858595c7b3842b6a1a799c",
  measurementId: "G-4MY84ZS336"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth };

export default db;
