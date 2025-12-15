// import { data } from "../../data/users.ts";
// import UserList from "../UserList/UserList.tsx";
import Filter from "../Filter/Filter.tsx";
import Section from "../Section/Section.tsx";
// import { useState } from "react";

function App() {
  // const [users, setUsers] = useState(data);
  // const [isListVisible, setIsListVisible] = useState(false);

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
        <Filter />
        {/* <UserList users={users} onDelete={handleDeleteUser} /> */}
      </Section>

      {/* )} */}
    </>
  );
}

export default App;
