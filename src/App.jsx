import UserProvider from "./context/UserContext";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <>
      <h1>S16-Context</h1>

      <UserProvider>
        <UsersPage />
      </UserProvider>
    </>
  );
}

export default App;
