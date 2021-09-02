import React from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  // create method toggleStatus that will change the status value from true to false. keep in mind that this method has to be created before our state!

  // create 2 properties for state: status (boolean) and toggle (toggleStatus method previously created)

  return (
    // pass the whole state to the provider as a value
    <UserProfile />
  );
}

export default App;
