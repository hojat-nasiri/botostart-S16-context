import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Form from "./Form";

// consumer component
function UsersList() {
  const { users } = useContext(UserContext);

  return (
    <>
      <Form />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
