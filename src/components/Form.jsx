import { useContext, useState } from "react";
import { UserContext } from "../App";

// consumer component
function Form() {
  const [firstName, setFirstName] = useState("");

  const { users, setUsers } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();

    setUsers((users) => [
      ...users,
      { id: Math.floor(Math.random() * 10), firstName },
    ]);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
