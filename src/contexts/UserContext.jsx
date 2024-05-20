import { createContext, useContext, useState } from "react";
import { User } from "../Models/User";

// Create a context for the user
const UserContext = createContext(null);

// User context provider component
export const UserContextProvider = ({ children }) => {
  // Initialize the user state with a new User instance
  const [user, setUser] = useState(new User({ name: "John Doe", email: "mail@mail.com", id: "asfd2234ls0" }));

  // Provide user context to the child components
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

// Custom hook to use the user context
// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error(`Missing context data!`);
  }

  return ctx;
};
