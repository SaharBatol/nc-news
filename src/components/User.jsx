import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {loggedInUser.name}</h2>
      <h2>{loggedInUser.username}</h2>
      <img src="{currentUser.avatar_url}" alt="avatar" />
    </div>
  );
};

export default User;
