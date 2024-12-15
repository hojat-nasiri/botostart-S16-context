import { useContext } from "react";
import { UserContext } from "../App";

// consumer component
function UsersList() {
  const { users } = useContext(UserContext);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </ul>
  );
}

export default UsersList;
