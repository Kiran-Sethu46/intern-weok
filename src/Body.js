import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import db, { auth } from "./firebase";

function Body() {
  const uid = (auth.currentUser || {}).uid;
  const [input, setInput] = useState("");
  const [add, setAdd] = useState("");
  const [name, setName] = useState("");
  const [usn, setusn] = useState("");

  const onclick = () => {
    db.collection("user-info").add({
      Input: input,
      add: add,
      USN: usn,
    });
  };

  return (
    <div className="Body">
      <div className="body-container">
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Input</h5>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <h5>Hobbies</h5>
          <input
            type="text"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <h5>USN</h5>
          <input
            type="number"
            value={usn}
            onChange={(e) => setusn(e.target.value)}
          />
          <Link to="/">
            <button onClick={onclick} className="register">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Body;
