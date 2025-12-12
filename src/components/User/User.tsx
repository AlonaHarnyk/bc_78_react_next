import type { UserType } from "../types.tsx";
import css from "./User.module.css";
import clsx from "clsx";

interface UserDataProps {
  userData: UserType;
  onDelete: (id: string) => void;
}

export default function User({
  userData: { name, email, isOnline, id },
  onDelete,
}: UserDataProps) {
  const handleDelete = () => {
    onDelete(id);
  };
  const getStatusColor = () => {
    if (isOnline === "yes") {
      return css.online;
    }
    if (isOnline === "no") {
      return css.offline;
    }
    return css.noInfo;
  };

  const statusStyle = clsx(css.status, getStatusColor());

  return (
    <>
      <h3 className={css.title}>{name}</h3>
      <p className={css.paragraph}>{email}</p>
      <p className={css.paragraph}>
        Is user online:
        <span className={statusStyle}>{isOnline ? isOnline : "no info"}</span>
      </p>
      <button onClick={handleDelete}>Delete</button>
      {/* {isOnline && <p>Is user online: {isOnline}</p>} */}
    </>
  );
}
