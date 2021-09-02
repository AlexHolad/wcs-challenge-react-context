import React from "react";

function UserProfile() {
  // access the context information with useContext hook

  return (
    <>
      {/* if status value is true, show "online", otherwise "offline" */}
      <div>User is </div>

      {/* when clicked, the button will call the method toggleStatus */}
      <button>click to change user status </button>
    </>
  );
}

export default UserProfile;
