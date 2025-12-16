import UserList from "../UserList/UserList.tsx";
import { getUsers } from "../../api/api.ts";
import type { Order, Status, User } from "../../types/types.ts";
import Filter from "../Filter/Filter.tsx";
import Section from "../Section/Section.tsx";
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import { useEffect, useState } from "react";
import AddUserForm from "../AddUserForm/AddUserForm.tsx";
import SortBlock from "../SortBlock/SortBlock.tsx";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState<Order>("asc");
  const [onlineStatus, setOnlineStatus] = useState<Status>("all");
  // const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getUsers({
      order: sortOrder,
      isOnline: onlineStatus === "all" ? undefined : onlineStatus,
    })
      .then(setUsers)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [sortOrder, onlineStatus]);

  const changeSortOrder = (order: Order) => {
    setSortOrder(order);
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  const onFilterChange = async (status: Status) => {
    setOnlineStatus(status);
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
        <Filter onFilterChange={onFilterChange} currentStatus={onlineStatus} />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        <SortBlock onChangeOrder={changeSortOrder} currentOrder={sortOrder} />
        <UserList users={users} />
        {!isFormVisible && <button onClick={showForm}>Add user</button>}

        {isFormVisible && <AddUserForm hideForm={hideForm} />}
      </Section>

      {/* )} */}
    </>
  );
}

export default App;
