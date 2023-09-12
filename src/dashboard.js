// Dashboard.js (or Dashboard.jsx)
import React from "react";
import {Link} from "react-router-dom"
import { signOutUser } from "./googlelogin";

function Dashboard() {

  let isuserloggedin=localStorage.getItem("user")
  if (isuserloggedin ==  null){
    return (
        <div>
       <Link to="/login">login to access dashboard</Link>
        </div>
    )
  }

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {/* Add your dashboard content here */}
      <button onClick={()=>signOutUser()}>logout</button>
    </div>
  );
}

export default Dashboard;
