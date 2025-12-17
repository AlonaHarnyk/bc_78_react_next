import UserList from "../UserList/UserList.tsx";
import { getUsers } from "../../api/api.ts";
import type { Field, Order, Status, User } from "../../types/types.ts";
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
  const [isListVisible, setIsListVisible] = useState(false);
  const [sortField, setSortField] = useState<Field>("name");

  useEffect(() => {
    if (isListVisible) {
      setIsError(false);
      setIsLoading(true);
      getUsers({
        order: sortOrder,
        sortBy: sortField,
        isOnline: onlineStatus === "all" ? undefined : onlineStatus,
      })
        .then(setUsers)
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    } else {
      setUsers([]);
    }
  }, [sortOrder, onlineStatus, isListVisible, sortField]);

  const deleteUser = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const updateUser = (id: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return { ...user, isOnline: !user.isOnline };
        }
        return user;
      })
    );
  };

  const changeSortOrder = (order: Order) => {
    setSortOrder(order);
  };

  const changeSortField = (field: Field) => {
    setSortField(field);
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

  const toggleUsers = () => setIsListVisible((visible) => !visible);

  return (
    <>
      <button onClick={toggleUsers}>
        {isListVisible ? "Hide Users List" : "Show Users List"}
      </button>
      {isListVisible && (
        <Section title="List of users">
          <Filter
            onFilterChange={onFilterChange}
            currentStatus={onlineStatus}
          />
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
          <SortBlock
            onChangeOrder={changeSortOrder}
            onChangeField={changeSortField}
            currentOrder={sortOrder}
            currentField={sortField}
          />
          <UserList
            users={users}
            onDelete={deleteUser}
            onUpdateUser={updateUser}
          />
          {!isFormVisible && <button onClick={showForm}>Add user</button>}

          {isFormVisible && <AddUserForm hideForm={hideForm} />}
        </Section>
      )}
    </>
  );
}

export default App;
