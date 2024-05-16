import { createContext, useContext, useState } from "react";
import { User } from "../Models/User";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(new User({ name: "John Doe", email: "mail@mail.com", id: "asfd2234ls0" }));

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error(`Missing context data!`);
  }

  return ctx;
};
