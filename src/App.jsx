import { createContext, useState } from "react";
import UsersPage from "./pages/UsersPage";

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Hojat" },
    { id: 2, firstName: "Hedieh" },
    { id: 3, firstName: "Narges" },
    { id: 4, firstName: "Hossein" },
  ]);

  return (
    <>
      <h1>S16-Context</h1>

      <UserContext.Provider value={{ users, setUsers }}>
        <UsersPage />
      </UserContext.Provider>
    </>
  );
}

export default App;
