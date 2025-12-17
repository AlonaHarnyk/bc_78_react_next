import type { User } from "../../types/types";
import css from "./User.module.css";
import clsx from "clsx";
import { deleteUser } from "../../api/api";
import { useState } from "react";

interface UserDataProps {
  userData: User;
}

export default function User({
  userData: { name, age, isOnline, id },
}: UserDataProps) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const getStatusColor = () => {
    if (isOnline === true) {
      return css.online;
    }

    return css.offline;
  };

  const statusStyle = clsx(css.status, getStatusColor());

  const handleDeleteUser = async () => {
    try {
      setIsDeleteLoading(true);
      await deleteUser(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <>
      <h3 className={css.title}>{name}</h3>
      <p className={css.paragraph}>Age: {age}</p>
      <p className={css.paragraph}>
        Is user online:
        <span className={statusStyle}>{isOnline ? "Yes" : "No"}</span>
      </p>
      {
        <button onClick={handleDeleteUser}>
          {" "}
          {isDeleteLoading ? "Deleting" : "Delete"}
        </button>
      }
    </>
  );
}
