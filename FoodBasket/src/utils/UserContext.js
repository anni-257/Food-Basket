import { createContext } from "react";

const UserContext = createContext({
  user: {
    userName: "Aniket Tarale",
    email: "taraleaniket257@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
