import React from "react";

const User = ({ user }) => {
  return (
    <li>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </li>
  );
};

export default User;
