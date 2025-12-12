import { data } from "../../data/users.ts";
import UserList from "../UserList/UserList.tsx";
import Section from "../Section/Section.tsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(data);

  const handleDeleteUser = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };
  return (
    <Section title="List of users">
      <UserList users={users} onDelete={handleDeleteUser} />
    </Section>
  );
}

export default App;
