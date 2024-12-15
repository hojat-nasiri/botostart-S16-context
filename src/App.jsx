import { createContext } from "react";
import UsersPage from "./pages/UsersPage";

const users = [
  { id: 1, firstName: "Hojat" },
  { id: 2, firstName: "Hedieh" },
  { id: 3, firstName: "Narges" },
  { id: 4, firstName: "Hossein" },
];

const UserContext = createContext();

function App() {
  return (
    <>
      <h1>S16-Context</h1>

      <UserContext.Provider value={users}>
        <UsersPage />
      </UserContext.Provider>
    </>
  );
}

export default App;
