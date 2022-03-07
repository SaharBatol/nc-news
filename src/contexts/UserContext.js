import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [checkedLoggedUser, setCheckedLoggedUser] = useState(true);
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (checkedLoggedUser && loggedUser) {
    setCheckedLoggedUser(false);
    setLoggedInUser(loggedUser);
  }

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
