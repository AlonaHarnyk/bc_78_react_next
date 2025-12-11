import type { UserType } from "../types.tsx";

interface UserDataProps {
  userData: UserType;
}

export default function User({
  userData: { name, email, isOnline },
}: UserDataProps) {
  return (
    <>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>Is user online:{isOnline ? isOnline : "no info"}</p>
      {/* {isOnline && <p>Is user online: {isOnline}</p>} */}
    </>
  );
}
