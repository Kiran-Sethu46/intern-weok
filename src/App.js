import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import { auth } from "./firebase";
import Admin from "./Admin";
// import firebaseConfig from "./firebase.js";
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  console.log(user);
  return (
    <BrowserRouter>
      <div className="app">
        {user ? (
          <Switch>
            <Route path="/">
              <Header />
              {user.email === "admin@mail.com" ? <Admin /> : <Body />}
              <Logout />
            </Route>
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Signup />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
