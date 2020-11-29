import React, { useEffect, useState } from "react";
import AdminPage from "./AdminPage";
import db from "./firebase";

function Admin() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setAdmin(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(admin);

  return (
    <div className="admin">
      {admin.map(({ email }) => (
        <AdminPage email={email} />
      ))}
    </div>
  );
}

export default Admin;
