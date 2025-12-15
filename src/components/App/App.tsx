// import { data } from "../../data/users.ts";
// import UserList from "../UserList/UserList.tsx";
import { getUsers } from "../../api/api.ts";
import type { User } from "../../types/types.ts";
import Filter from "../Filter/Filter.tsx";
import Section from "../Section/Section.tsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  // const [isListVisible, setIsListVisible] = useState(false);

  const onSubmit = async (status?: string) => {
    const users = await getUsers({ isOnline: status });
    console.log(users);
  };

  // const handleDeleteUser = (id: string) => {
  //   setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  // };

  // const toggleUsers = () => setIsListVisible((visible) => !visible);

  return (
    <>
      {/* <button onClick={toggleUsers}>
        {isListVisible ? "Hide Users List" : "Show Users List"}
      </button> */}
      {/* {isListVisible && ( */}
      <Section title="List of users">
        <Filter onSubmit={onSubmit} />
        {/* <UserList users={users} onDelete={handleDeleteUser} /> */}
      </Section>

      {/* )} */}
    </>
  );
}

export default App;
