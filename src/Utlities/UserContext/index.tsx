import { createContext, useContext, useState } from "react";

// interface UserData {
//   user: any[] | null; // Change "any[]" to the specific type of your user data
//   login: (userData: any) => void;
//   logout: () => void;
// }

const UserContext = createContext<any | null>(null);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any[] | null>(null);
const [checkoutDetails,setcheckoutDetails]=useState([{}]);
const [validationErrors, setValidationErrors]:any = useState();


  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

 

  return (
    <UserContext.Provider value={{ user, login, logout ,checkoutDetails,setcheckoutDetails,setValidationErrors,validationErrors }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): any | null => {
  return useContext(UserContext);
};
