import { createContext } from "react";
import UsersPage from "./pages/UsersPage";

const users = [
  { id: 1, firstName: "Hojat" },
  { id: 2, firstName: "Hedieh" },
  { id: 3, firstName: "Narges" },
  { id: 4, firstName: "Hossein" },
];

export const UserContext = createContext();

function App() {
  return (
    <>
      <h1>S16-Context</h1>

      <UserContext.Provider value={{ users, author: "Hojat Nasiri" }}>
        <UsersPage />
      </UserContext.Provider>
    </>
  );
}

export default App;
