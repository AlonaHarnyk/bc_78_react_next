import UserList from "../UserList/UserList.tsx";
import { getUsers } from "../../api/api.ts";
import type { Field, Order, Status } from "../../types/types.ts";
import Filter from "../Filter/Filter.tsx";
import Section from "../Section/Section.tsx";
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import { useState } from "react";
import AddUserForm from "../AddUserForm/AddUserForm.tsx";
import SortBlock from "../SortBlock/SortBlock.tsx";
import { useQuery } from "@tanstack/react-query";
import SearchForm from "./../SearchForm/SearchForm";

export default function UsersTab() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState<Order>("asc");
  const [onlineStatus, setOnlineStatus] = useState<Status>("all");
  const [isListVisible, setIsListVisible] = useState(false);
  const [sortField, setSortField] = useState<Field>("name");
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useQuery({
    queryKey: [
      "users",
      sortOrder,
      sortField,
      onlineStatus,
      searchWord,
      currentPage,
    ],
    queryFn: () =>
      getUsers({
        order: sortOrder,
        sortBy: sortField,
        isOnline: onlineStatus === "all" ? undefined : onlineStatus,
        search: searchWord,
        page: currentPage,
      }),
    enabled: isListVisible,
  });

  // const deleteUser = (id: string) => {
  //   setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  // };

  // const updateUser = (id: string) => {
  //   setUsers((prevUsers) =>
  //     prevUsers.map((user) => {
  //       if (user.id === id) {
  //         return { ...user, isOnline: !user.isOnline };
  //       }
  //       return user;
  //     })
  //   );
  // };

  const handleSearch = (searchWord: string) => {
    setSearchWord(searchWord);
    setCurrentPage(1);
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
    setCurrentPage(1);
  };

  const handleLoadMoreBtn = () => {
    setCurrentPage(currentPage + 1);
  };

  const toggleUsers = () => setIsListVisible((visible) => !visible);

  return (
    <>
      <button onClick={toggleUsers}>
        {isListVisible ? "Hide Users List" : "Show Users List"}
      </button>
      {isListVisible && (
        <Section title="List of users">
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
          {data && data.length > 0 && (
            <>
              {!isFormVisible && <button onClick={showForm}>Add user</button>}

              {isFormVisible && <AddUserForm hideForm={hideForm} />}

              <SearchForm onSubmit={handleSearch} />

              <Filter
                onFilterChange={onFilterChange}
                currentStatus={onlineStatus}
              />

              <SortBlock
                onChangeOrder={changeSortOrder}
                onChangeField={changeSortField}
                currentOrder={sortOrder}
                currentField={sortField}
              />
              <UserList
                users={data}
                // onDelete={deleteUser}
                // onUpdateUser={updateUser}
              />
              {data.length === 5 && (
                <button onClick={handleLoadMoreBtn}>Load More</button>
              )}
            </>
          )}
        </Section>
      )}
    </>
  );
}
