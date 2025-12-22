import type { User } from "../../types/types";
import css from "./User.module.css";
import clsx from "clsx";
import {
  deleteUser,
  updateUserStatus,
  type UpdateUserStatusParams,
} from "../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UserDataProps {
  userData: User;
}

export default function User({
  userData: { name, age, isOnline, id },
}: UserDataProps) {
  const queryClient = useQueryClient();
  const { mutate: deleteMutate, isPending: isDeletePending } = useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      console.log("Error delete user");
    },
  });

  const { mutate: updateMutate, isPending: isUpdatePending } = useMutation({
    mutationFn: ({ id, status }: UpdateUserStatusParams) =>
      updateUserStatus({ id, status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      console.log("Error update status user");
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
    deleteMutate(id);
  };

  const handleUpdateUserStatus = async () => {
    updateMutate({ id, status: !isOnline });
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
        {isDeletePending ? "Deleting" : "Delete"}
      </button>
      <button onClick={handleUpdateUserStatus}>
        {isUpdatePending ? "Updating status" : "Update user status"}
      </button>
    </>
  );
}
