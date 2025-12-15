import UserList from "../UserList/UserList.tsx";
import { getUsers } from "../../api/api.ts";
import type { User } from "../../types/types.ts";
import Filter from "../Filter/Filter.tsx";
import Section from "../Section/Section.tsx";
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [isListVisible, setIsListVisible] = useState(false);

  const onSubmit = async (status?: string) => {
    try {
      setIsError(false);
      setIsLoading(true);

      const users = await getUsers({ isOnline: status });
      setUsers(users);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
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
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        <UserList users={users} />
      </Section>

      {/* )} */}
    </>
  );
}

export default App;
