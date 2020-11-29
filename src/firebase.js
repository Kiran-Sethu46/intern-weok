import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVB9Z2FnSRlcSWkOq1cLDd84BAgRzWhXg",
  authDomain: "apna-clone.firebaseapp.com",
  databaseURL: "https://apna-clone.firebaseio.com",
  projectId: "apna-clone",
  storageBucket: "apna-clone.appspot.com",
  messagingSenderId: "1033418306067",
  appId: "1:1033418306067:web:b34c05e2df9f51543845e6",
  measurementId: "G-MDLZCRR86F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth };

export default db;
