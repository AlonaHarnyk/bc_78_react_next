import type { User } from "../../types/types";
import css from "./User.module.css";
import clsx from "clsx";
import { deleteUser, updateUserStatus } from "../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UserDataProps {
  userData: User;
  // onUpdateUser: (id: string) => void;
}

export default function User({
  userData: { name, age, isOnline, id },
}: // onUpdateUser,
UserDataProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      console.log("Error!!!");
    },
  });
  const getStatusColor = () => {
    if (isOnline === true) {
      return css.online;
    }

    return css.offline;
  };

  const statusStyle = clsx(css.status, getStatusColor());

  const handleDeleteUser = async () => {
    mutate(id);
  };

  const handleUpdateUserStatus = async () => {
    // try {
    //   setIsUpdating(true);
    //   await updateUserStatus(id, !isOnline);
    //   onUpdateUser(id);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsUpdating(false);
    // }
  };

  return (
    <>
      <h3 className={css.title}>{name}</h3>
      <p className={css.paragraph}>Age: {age}</p>
      <p className={css.paragraph}>
        Is user online:
        <span className={statusStyle}>{isOnline ? "Yes" : "No"}</span>
      </p>
      <button onClick={handleDeleteUser}>
        Delete
        {/* {isDeleteLoading ? "Deleting" : "Delete"} */}
      </button>
      {/* <button onClick={handleUpdateUserStatus}>
        {isUpdating ? "Updating status" : "Update user status"}
      </button> */}
    </>
  );
}
