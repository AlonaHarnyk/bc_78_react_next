import { data } from "../../data/users.ts";
import UserList from "../UserList/UserList.tsx";
import Section from "../Section/Section.tsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(data);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleDeleteUser = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const showUsers = () => {
    setIsListVisible(true);
  };

  return (
    <>
      <button onClick={showUsers}>Show list of users</button>
      {isListVisible && (
        <Section title="List of users">
          <UserList users={users} onDelete={handleDeleteUser} />
        </Section>
      )}
    </>
  );
}

export default App;
