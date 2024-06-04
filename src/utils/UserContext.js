import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Testing context",
});

export default UserContext;
