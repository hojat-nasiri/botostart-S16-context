import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Hojat" },
    { id: 2, firstName: "Hedieh" },
    { id: 3, firstName: "Narges" },
    { id: 4, firstName: "Hossein" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
