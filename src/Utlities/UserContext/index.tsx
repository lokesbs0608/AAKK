import { createContext, useContext, useState } from "react";

const UserContext = createContext("");

export const UserProvider = ({ children }: any) => {
  const [user, setuser] = useState(null);

  const login = (usersData: any) => {
    setuser(usersData);
  };
  const logout = () => {};

  return <UserContext.Provider value={"lk"}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
