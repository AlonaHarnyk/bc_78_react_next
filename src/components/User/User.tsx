import type { User } from "../../types/types";
import css from "./User.module.css";
import clsx from "clsx";

interface UserDataProps {
  userData: User;
  // onDelete: (id: string) => void;
}

export default function User({
  userData: { name, age, isOnline, id },
}: // onDelete,
UserDataProps) {
  // const handleDelete = () => {
  //   onDelete(id);
  // };
  const getStatusColor = () => {
    if (isOnline === true) {
      return css.online;
    }

    return css.offline;
  };

  const statusStyle = clsx(css.status, getStatusColor());

  return (
    <>
      <h3 className={css.title}>{name}</h3>
      <p className={css.paragraph}>Age: {age}</p>
      <p className={css.paragraph}>
        Is user online:
        <span className={statusStyle}>{isOnline ? "Yes" : "No"}</span>
      </p>
      {/* <button onClick={handleDelete}>Delete</button> */}
    </>
  );
}
