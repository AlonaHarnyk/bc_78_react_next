import type { UserType } from "../types.tsx";
import css from "./User.module.css";

interface UserDataProps {
  userData: UserType;
}

export default function User({
  userData: { name, email, isOnline, id },
}: UserDataProps) {
  const handleDelete = () => { 
  console.log(id);
  
  };

  return (
    <>
      <h3 className={css.title}>{name}</h3>
      <p className={css.paragraph}>{email}</p>
      <p>Is user online:{isOnline ? isOnline : "no info"}</p>
      <button onClick={handleDelete}>Delete</button>
      {/* {isOnline && <p>Is user online: {isOnline}</p>} */}
    </>
  );
}
