import firebaseConfig, { auth } from "./firebase";
import * as firebase from "firebase";
import db from "./firebase";
class Fire {
  get firestore() {
    return db;
  }
  get uid() {
    return (auth.currentUser || {}).uid;
  }
  get timestamp() {
    return Date.now();
  }
  get displayName() {
    return (auth.currentUser || {}).displayName;
  }
  createUser = async (user) => {
    try {
      await auth.createUserWithEmailAndPassword(user.email, user.password);
      let data = db.collection("users").doc(this.uid);
      data.set({
        displayName: user.displayName,
        email: user.email,
        uid: this.uid,
        company: user.company,
        phno: user.phno,
        dob: user.dob,
      });
    } catch (error) {
      alert(error);
    }
  };
  //     createUser = async user => {
  //     try
  //     {
  //         await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  //         var user = firebase.auth().currentUser;
  //         user.updateProfile({
  //             displayName:user.displayName
  //           }).then(function() {
  //             alert('Update Succesful')
  //           }).catch(function(error) {
  //             alert(error)
  //           });
  //     }
  //      catch (error)
  //      {
  //         alert( error );
  //     }
  // };

  signOut = () => {
    auth.signOut();
  };
}
Fire.shared = new Fire();
export default Fire;
